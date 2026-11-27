# Prototype source location

The authoritative Unity project is **`F:\Unity Projects\AC_Game`**.

Keep the game source in its external Git worktrees. This Workspace folder
points to those locations.

- [Windows project-folder shortcut](../../../workspace/2026-10-23_mech-prototype/links/AC_Game-shortcut.zip) (extract, then open `AC_Game.url`)
- [Prototype wiki](../../../workspace/2026-10-23_mech-prototype/prototype.html)
- [Source inventory](../project-snapshot.md)

The main project uses Unity **6000.5.2f1** and `Assets/Scenes/Prototype Map.unity`.

## Unity 7 combat rebuild

Open `F:\Unity Projects\AC_Game-Unity7` with Unity **7000.0.0a22**.
The first combat milestone is implemented in the working tree on `unity-7-alpha-rebuild`, based on `90f2113`. Hold Attack to fire from the mech's muzzle. The reticle turns red when it locks. Free aim and locked fire both use the existing PhysX map colliders. Each round is a pure entity. GameObjects provide the camera and input, actor hitboxes, tracer meshes and HUD. The target's GameObject-backed entity holds its 30 HP.

**Verified on 28 November 2026 with Entities 7.0.0 and Pipeline 1.0.1.** All 5 Edit Mode and 13 Play Mode tests passed. The XML reports are in the Unity checkout under `Logs/ecs-combat-edit.xml` and `Logs/ecs-combat-play.xml`.

- Three locked hits reduced the target from 30 to 20 to 10 to 0 HP. Lock released at zero. A free-aim shot hit beyond the 20-unit lock range. With a clear camera and cover at the muzzle, the target stayed at 30 HP.
- Pausing stopped fire and travel. The dash regression checked the projectile origin and muzzle in the same camera callback. Reloading cleared the projectiles and tracers, restored health, and allowed three more hits.
- A fixed-input comparison matched the original motor at the measured precision. The step rose 0.200 units, the jump rose 1.917 units in six frames, the map ramp rose 0.923 units, and the dash traveled 4.225 units in five frames.
- The Windows x64 build at `Build/AC_Game.exe` launched with Direct3D 11, showed 30/30 HP, and rendered a fired projectile in Prototype Map. In the live Editor, Pipeline captured the black free-aim ring, the red locked ring with a round in flight, and the black ring at 0/30 HP.

**Open playtest question.** During a full-speed dash, is it easy to follow the purple round all the way to the small gray target?

[ECS combat implementation plan](../../../workspace/2026-10-23_mech-prototype/ecs-combat-plan.md)

## Previous Unity 7 alpha experiment

The previous experiment is available at `unity-7-alpha` (`f58e51e`) and
`origin/experiment/unity-7-alpha`. On 27 November 2026, the
13 gameplay scripts were grouped under `Assets/Scripts/` in `Player`, `Enemies`,
`Targeting`, `Weapons`, `Combat`, and `UI`. All 13 retained their original
script GUIDs and still belong to the `Mech.Gameplay` assembly.

All 11 Edit Mode tests passed. In Play Mode, 16 of 17 passed. The projectile
pool test also failed with the original folder layout. It timed out waiting
for the enemy to reuse the specific round the player had fired.

### ECS projectiles and health, 27 November 2026

In that revision, player and enemy weapons launch pooled
GameObjects with their existing meshes and trails. `ProjectileFlightSystem`
advances active rounds on the game frame clock and batches their travel
raycasts against the existing PhysX colliders. The nearest eligible hit
determines the impact. A crowded ray is checked again if its batch slice fills.
`DamageSystem` applies projectile hits to `HealthData` on the owning mech's
entity. The HUD, targeting, and attack scripts still receive health and death
notifications through the existing `Health` component.

All 11 Edit Mode and 18 Play Mode tests passed on 7000.0.0a22. Checks include
locked and free aim, camera-frame launch timing, a player round reused by an
enemy with the same ammo type, cover behind six ignored hitboxes, and two
shots dealing lethal damage to the same target in one frame.
The Windows x64 player built successfully and started in a headless smoke check.

With trails enabled, the editor's median player-loop time over 90 frames was
14.7 ms before and 14.5 ms after at eight rounds, and 14.6 ms before and
14.5 ms after at 512 rounds. These measurements cover the whole frame.
During hands-on play, check trail continuity when rounds are reused and
whether tracer motion during a dash feels the same.
