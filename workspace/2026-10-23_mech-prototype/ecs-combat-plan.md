# ECS combat loop for the Unity 7 rebuild

**First playable milestone.** In Prototype Map, hold Attack to fire from the mech's muzzle. A straight projectile can hit the stationary target in free aim or automatic lock. Cover stops the shot. Three unobstructed hits take the target from 30 HP to zero, the HUD shows each change, and lock releases on death. The 30 HP value is proposed for this playtest.

**Implementation handoff.** Work in `F:\Unity Projects\AC_Game-Unity7` on the rebuild branch. Read its `AGENTS.md` and use the editor pinned in `ProjectSettings/ProjectVersion.txt`. The older editor number in the checkout's instructions belongs to the Unity 6 project. Inspect the donor revisions below with `git show <revision>:<path>` from the rebuild checkout. Bring over selected code, tests and matching Unity `.meta` files. Both source revisions are available in the local repository.

## Starting point for the 28 November 2026 plan

The rebuild checkout is `unity-7-alpha-rebuild` at `90f2113`, pinned to Unity `7000.0.0a22`. Source inspection covered the six gameplay scripts, player and bullet prefabs, default round, input actions, project settings and enabled scene. Play Mode verification belongs to the implementation steps below.

- **Movement and aim.** `PlayerController` owns movement and the player pose through PhysX capsule casts. The player prefab sets ground speed to 15, dash impulse to 50 and step height to 0.3. `LockOnAim` searches within 20 units and a ring of 6.5% of screen height. It tests the collider center against the ring, then uses the pivot for visibility. Locked fire also uses the pivot.
- **Firing.** `ShootingController` samples held Attack and owns a 0.25 s cooldown. Free aim checks 200 units from the camera and falls back to a point 100 units away. `BulletManager` advances pooled GameObjects and raycasts every active round against an all-layers mask. The assigned default round has speed 20, lifetime 30 s and damage 10, with gravity and piercing disabled.
- **Target and HUD.** The scene has a solid sphere on the Target layer, a HUD canvas and a crosshair. The only damage code is an `IDamageable` interface and a same-collider lookup. There is no health implementation, HP display, enemy attack or gameplay test assembly on this branch.

## Implementation order

1. **Establish the baseline and prove the alpha integration.** Open Prototype Map in the pinned editor. Record free fire, lock acquisition, a dash and a shot near cover. Restore the gameplay and test assembly definitions from the earlier branch, adjusting references for the installed editor. In a small Play Mode test, read health from the scene target's GameObject-backed entity, create a separate projectile entity, and verify that the ECS update gets a scaled delta time that advances and pauses correctly. Keep the current character motor as the sole writer of the player pose.

2. **Connect the reticle and muzzle to an ECS weapon.** Adapt the existing post-camera callback. Sample held Attack in Update, then capture the muzzle position, aim point and selected actor once Cinemachine applies the player's camera pose. Use the same hitbox center for the ring, visibility and locked aim. For free aim, keep the current range and fallback. Pass this snapshot to the weapon on the player's entity. An unmanaged firing system owns the cooldown and spawns each pure projectile with its owner, position, velocity, lifetime and damage. Copy numeric tuning from the assigned `BulletType` during setup. Consume each camera sample at most once, including when multiple camera callbacks occur. Verify launch direction on the frame the target enters or leaves the ring. [Camera timing decision D-011](#/mech-prototype/3)

3. **Resolve travel against the map.** An unmanaged projectile system sweeps from each round's old position to its proposed position, limited by remaining lifetime. Prepare the rays in a job, batch them with PhysX `RaycastCommand`, and process results after the dependency completes. Misses advance or expire. The nearest eligible hit consumes the default round. A damageable hit emits an entity-and-amount request. A wall emits only an impact. Register collider IDs against their owning ECS actor at setup and remove registrations on teardown. This handles root colliders and offset child hitboxes, including registered trigger hitboxes. Exclude the shooter, tracer visuals and unrelated triggers. If ignored hits fill a result slice, retry the affected ray with enough capacity to find cover behind them. Use the same eligibility rules for camera visibility. [Batched raycasts](https://docs.unity.com/en-us/engine/7000.0/script-reference/unityengine/raycastcommand) · [Collider ID returned by a hit](https://docs.unity.com/en-us/engine/7000.0/script-reference/unityengine/raycasthit/colliderentityid)

4. **Apply damage and show the result.** Put current and maximum health on the target entity. An unmanaged damage system consumes hit requests after travel, ignores expired targets, and clamps HP to zero. Two lethal hits in one update produce one transition to dead. Selection drops the dead target. A small HUD reader displays its ECS health even after lock releases. For the visible round, use a single presentation component to place and recycle the existing mesh and trail from ECS positions and impact points. Disable the visual prefab's colliders. Retire the old bullet loop and unused interface when scene firing uses the new path. One projectile entity owns flight from launch to impact or expiry.

5. **Play the whole loop.** Run Edit Mode and Play Mode tests, then check a Windows player. Fire from inside and outside lock range, shoot with the camera clear and the muzzle behind cover, and repeat while strafing, turning and dashing. Check the ramp, step and jump against the starting build. Reload the scene and repeat the three hits to catch stale registrations or visuals. During play, can the tester tell why the reticle locked, where the round struck, and whether it dealt damage?

## Integration details that affect the playtest

- **Weapon setup.** The player prefab's `bulletType` slot is empty. Its current weapon falls back to the scene manager's `defaultBulletType`. When replacing that manager, assign `Assets/Scriptable Objects/DefaultBulletType.asset` to the new weapon setup and retain `BulletSpawnPoint` as the muzzle. Check the HUD and weapon references on the actual scene instance.
- **Launch timing.** The donor regression observes the shot before the camera callback returns. A ready weapon must have created its projectile entity by then, with the muzzle position and direction captured on that frame. One way to preserve this is for the camera callback to submit the sample and run the unmanaged firing system once there. Give that system a single update path and use scaled game time for the cooldown. The regular flight update advances the round on its next simulation step. The timing test should inspect the newly spawned entity at launch, before travel or tracer placement.
- **Runtime ownership.** Keep weapon, flight and damage rules in unmanaged `ISystem` implementations. Store entity IDs and numeric data in simulation components. GameObject code supplies camera and input samples, registers colliders, and draws trails and HP. Register the shooter's colliders as well as the target's. In tests that add a child hitbox after scene load, exercise the same registration path and check that disabling or removing it clears the mapping.

## What to reuse from the other branches

- **Camera and aiming code.** On `main`, commit `a1159ca` contains `PlayerAimAndFire.OnCameraUpdated`, the scene event wiring and the hitbox-center calculations in `LockOnAim`. Port the callback and aiming calculations. Replace its direct weapon call with the ECS input snapshot and its managed health lookup with the collider-owner mapping. Recreate only the required scene wiring on the rebuild scene.
- **Play Mode fixtures.** Start with `Assets/Tests/PlayMode/ShootingControllerTests.cs` at `a1159ca`. Reuse the synthetic mouse, camera placement, reticle resizing and lock-transition scenarios. Port the free-aim hit, offset child hitbox, camera cover, muzzle cover, and owner/crossing-projectile cases. Replace checks on `BulletManager` children and `Health` events with projectile-entity, HP, HUD and lock assertions.
- **Damage and collision regressions.** Port the clamping and single-death cases in `HealthTests` to an isolated ECS world. From `unity-7-alpha` at `f58e51e`, adapt `BatchedShotsRespectCoverBehindIgnoredHitboxesAndApplyLethalDamageOnce`. It puts six shooter colliders in front of cover, then checks two lethal shots in one frame. Add expiry, held-fire cadence, pause and scene-reload checks for the new implementation.

The first milestone ends with the stationary target playtest. Enemy return fire, predictive aim, gravity and piercing rounds are candidates for later passes. The result to review is whether a shot is easy to trace from input to HP and whether the reticle and impact agree during movement.

## Completion evidence

From the Unity project root, run the following with that checkout closed in the Editor for the batch runs.

```powershell
unity test . --mode EditMode
unity test . --mode PlayMode
unity build . --target StandaloneWindows64 --output-path ./Build/AC_Game.exe
```

Record the tested revision or working tree, test counts, Windows player launch result, and any unfinished manual checks in the Mech Prototype note. Report free aim, locked aim, and camera-visible but muzzle-blocked cover separately. The expected HP sequence for three spaced hits is **30 → 20 → 10 → 0**. In the blocked shot, HP stays at **30**. Reloading the scene restores **30 HP** and clears live projectiles and tracers.
