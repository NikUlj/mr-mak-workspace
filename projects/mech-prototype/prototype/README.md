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
The current branch is `unity-7-alpha-rebuild`. Its starting revision
(`90f2113`) has movement, automatic lock and pooled shooting. The target's
first health component and the combat tests are planned work. The
[ECS combat plan](../../../workspace/2026-10-23_mech-prototype/ecs-combat-plan.md)
records the inspected baseline, code and tests available on other branches,
and the first playtest.

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
