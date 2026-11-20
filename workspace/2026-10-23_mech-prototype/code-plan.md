# Code plan for the first combat playtest

**Proposal · 20 November 2026 · Unity 6000.5.2f1 · `side` at `e45cd41`**

Build one repeatable fight in **Prototype Map**. The player can already move, jump, dash, aim and fire. Give the existing target health, then let one opponent signal and return fire. Show who took damage, end the fight when either combatant dies, and restart it with one input. The first question is whether maneuvering, tracking and dodging one opponent feels good enough to want another attempt.

Playtesting can start twice. The damageable target is enough for the first movement and aiming session. The opponent and retry make the first combat session possible. Use the existing placeholders and a few lines of on-screen text for both.

## What the project already establishes

- **Game direction.** Third-person, Armored Core-inspired mech combat in a roguelike or roguelite. The Workspace favors thruster-driven movement and whole chassis that can share equipment. The hand and back weapon layout is a design reference. Run structure, equipment rules and persistence are open. One chassis and one gun are sufficient to test the controls. [Decisions](#/mech-prototype/3) · [Working brief on chassis and enemies](#/mech-world-concepts/1)
- **Code in the scene.** Six authored gameplay scripts cover a custom capsule motor, Cinemachine-driven third-person camera setup, automatic target selection, held fire, a projectile pool, projectile settings and a damage interface. The scene target has a collider. No authored component receives damage, attacks the player, decides an encounter or starts another attempt. The pool, camera and crosshair references are supplied by the scene.
- **Changes since the October review.** The shallow-ramp clearance fix is in `11087b1`. Four earlier Play Mode checks on a temporary scene copy passed for the 5.7° ramp at 30/60/120 updates per second, a 25 cm step in both directions, ceiling clearance on the ramp, and a flat-ground jump and landing. The reticle now supplies live screen coordinates (`96d6395`). Moving projectile colliders to Ignore Raycast (`df1b108`) also has a passing temporary test covering lock, cover, reacquisition and initial firing direction. Window resizing and projectile damage were outside that test. [Prototype test records](#/mech-prototype/1) · [October review](#/mech-prototype/4)
- **Verification for this plan.** The Unity working tree was clean at the revision above. The six authored scripts compiled against the cached project references with the pinned Editor's Roslyn compiler. There are no checked-in gameplay test assemblies. This review used the existing test records and inspected the scene, prefab overrides and bindings. A fresh Play Mode run and Windows player build remain to be verified.

## Implementation order

### 1. Establish the movement and aim baseline

Open the existing scene. Run one short route covering the ramp, step and jump, then dash into a corner, jump into a low ceiling and turn the camera near cover. Fire with and without a selected target. Resize the Game view and repeat both shots. Record the revision, input device and conditions. Use the prefab values as the starting point, including ground speed 20, dash impulse 100 and step height 0.3. Changing those while reorganizing the motor would make a regression hard to diagnose.

**Ready to proceed when** a tester can move, turn, acquire and lose the target, and fire at the visible reticle. Carry the existing movement and lock checks into project Play Mode tests as those paths are touched. Fix a reproduced blocker here. Subjective tuning can begin against the target in step 2.

### 2. Make a shot count

Implement `Health : IDamageable` on the target. Clamp health at zero, publish a change after damage and emit death once. Give the aim query and the weapon one target owner and one world-space aim point. A child collider can resolve its owning health through a parent or a simple hitbox reference. Give each projectile its shooter and an explicit set of valid collision layers. Keep the muzzle as the start of projectile travel so a wall between gun and target still stops the shot. Use plain text to show health. Restarting Play Mode is sufficient to reset this first target.

**First hands-on test.** With a temporary 30 HP target and the existing 10-damage shot, three unobstructed hits should take it to zero. Shoot from inside the 20-unit lock range, then use free aim from beyond it. Repeat with an offset child hitbox, behind cover and while firing across another projectile. One hit changes health once, cover blocks damage, and a dead target drops out of selection. Ask the tester to strafe and dash while tracking it. Write down when the reticle, impact and intended target disagree.

### 3. Add one opponent that can be dodged

Reuse `Health` on the player. Extract weapon cooldown and projectile launch from `ShootingController` behind a small `TryFire` method. The player supplies an aim point from the existing reticle or lock. The enemy supplies a point on the player. Start with a stationary ranged opponent, a readable wind-up, one shot and a recovery interval. Sample the intended shot direction early enough for the player to evade it. A debug cue can show the wind-up. The Workspace's sideways-moving enemy is a useful next variation if tracking a stationary shooter proves too easy.

**Ready to proceed when** standing in the shot costs player health, a timed dash can avoid it, cover protects either combatant, and neither shooter's own projectile damages it. Show both health values so the tester can distinguish a miss from an unreadable hit. Stop the attack when its owner dies.

### 4. Close the encounter and play it repeatedly

Give a scene-local encounter controller three states called **Fighting**, **Won** and **Lost**. It listens to the two death events, resolves one outcome, stops combat and exposes Retry. Reload the scene for a fresh attempt. Include a keyboard retry action and a visible control hint. Build the Windows player from the tested revision and run it outside the Editor.

**First combat playtest is ready when** a tester can win, deliberately lose and retry in the player without opening the Editor. Repeat with shots in flight at the end of a fight. Both actors must return to their starting positions and health. Check that cooldowns reset, targeting starts fresh, old shots disappear and each death produces one result. Replay the same setup several times before changing a variable.

## Code review and rewrite decisions

| Area | Finding and recommended change |
| --- | --- |
| **Movement and look** | Keep the custom motor and its ground-clearance correction. The airborne slide path zeroes the vertical part of every contact normal and returns a position without reconciling stored velocity. Test hitting a ceiling while rising and air-dashing into a corner. If either fails, repair that contact case and rerun the ramp and step checks. When control handling changes, separate input and camera look from motor simulation. Move the frame cap out of the player and remove the unused aim reference, frame counter and old debug blocks on that pass. See `PlayerController.cs` lines 62–97, 206–214, 286–301 and 338–375. |
| **Gamepad** | Normalizing the move vector discards stick magnitude. Look adds a pointer delta and a sustained stick deflection using the same per-frame formula. Preserve analog movement magnitude, treat stick look as a rate multiplied by elapsed time, and retain pointer-delta look. Test half versus full travel and a one-second turn at 30/60/120 FPS before interpreting gamepad feedback. Keyboard/mouse is a proposed first device if a pad is unavailable. See `PlayerController.cs` lines 105–118 and 399–410. |
| **Aim and reticle** | Keep current automatic selection and free aim. Selection scores a collider's bounds center, tests visibility toward its transform pivot and compares exact collider transforms. Locked fire also aims at the pivot. These can disagree on a compound or offset collider. Use the same owner/point for selection, visibility and firing in step 2. Keep the live reticle center for free aim. Move reticle color into the HUD when adding health feedback. See `LockOnAim.cs` lines 46–49, 64–86 and 119–130, and `ShootingController.cs` lines 59–79. |
| **Hit detection** | `BulletManager` looks for `IDamageable` only on the hit collider. The scene gives projectile travel an explicit all-layer mask, including projectile trigger colliders. The earlier visibility-ray fix does not cover this query. Specify world and valid actor hitboxes, skip the owner, and set trigger handling deliberately. Cover, self-hits and crossing fire are the cases to test. See `BulletManager.cs` lines 81–89 and 102–109, and `Prototype Map.unity` lines 226–230. [Unity raycast parameters](https://docs.unity.com/en-us/engine/6000.5/script-reference/unityengine/physics/raycast) |
| **Weapon and projectile code** | Keep the pool and straight projectiles. Extract the shared firing operation when adding the second shooter. Correct the audio branch, which calls `muzzleFlash.Play()` when `shootSound` is assigned, and remove unused shooting references on that edit. Gravity computes a displacement it never applies. Piercing decrements a copy of the active bullet. Both are disabled on the default round. Revisit only when testing a weapon that needs them, with a trajectory test or a count of distinct penetrated targets. See `ShootingController.cs` lines 7–16 and 49–55, and `BulletManager.cs` lines 56–70, 94–108 and 125–129. |

## Architecture for this prototype

- **Compose actors from small Unity components.** Keep movement, targeting, weapon and health independently usable. Wire scene dependencies in the Inspector, as the camera and bullet manager already are. The player and enemy each own health and a weapon. Only the player needs camera input and a reticle. This lets two actors share combat rules without a mech inheritance tree.
- **Call commands directly and publish outcomes locally.** Player input or enemy logic calls the weapon. A projectile hit calls `IDamageable.TakeDamage`. Health raises typed C# events such as `HealthChanged` and `Died` on that actor. The HUD and encounter controller subscribe to the specific actors they display or track and release subscriptions when disabled. A global event bus would hide who caused a hit and who owns retry for a fight with two actors. Reconsider a wider event channel if a concrete cross-scene consumer appears.
- **Use MVP only for the HUD.** Health and encounter state own the values. A small presenter reads the initial values, observes changes and updates a passive view containing the health text, reticle color and result. The retry control calls the encounter controller. Applying MVC or MVP to projectile movement and collision would add layers without helping the physics checks.
- **Keep configuration shared and live state local.** Use the existing `BulletType` ScriptableObject for projectile settings. Put live health on each actor, cooldown on each weapon and in-flight state in the pool. Start enemy timing with serialized fields. A second tunable weapon or enemy is a reason to extract another shared definition. [Unity ScriptableObject manual](https://docs.unity.com/en-us/engine/6000.5/manual/scripting/fundamental-unity-types/class-scriptable-object)
- **Use small explicit states where time matters.** A timer and a short enemy state sequence make the wind-up, shot and recovery easy to tune. A separate encounter state owns win, loss and retry. A behavior-tree framework, generic state-machine library or persistent game manager would add infrastructure before there is a second behavior or encounter.

## What the playtest decides

For each attempt, note the input device, outcome, approximate duration and one concrete moment the tester found satisfying or confusing. Ask whether they could keep the enemy in view during a dash, predict when to evade, and explain why a shot hit or missed. Capture the simplest reproduction for a problem. Use Edit Mode tests for damage arithmetic and single death notification. Use Play Mode tests for hit, cover and retry behavior alongside the movement fixtures.

If camera or control problems dominate, repeat the same fight after changing one thing. If the stationary enemy stops testing tracking, try a short sideways movement before its shot. When the duel holds up and the question becomes what makes a second fight interesting, the cheapest run experiment is two encounters using the same arena with one explicit carryover rule. Decide what to carry only when posing that question.

Procedural rooms, rewards, permanent progression, saves, chassis selection, four-weapon loadouts and energy, heat or stagger systems each answer later design questions. The first milestone ends when a tester can fight, retry, and tell us what should change next.
