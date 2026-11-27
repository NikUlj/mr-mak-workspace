# Prototype source location

The authoritative Unity project is **`F:\Unity Projects\AC_Game`**.

Keep the game source in its external Git worktrees. This Workspace folder
points to those locations.

- [Windows project-folder shortcut](../../../workspace/2026-10-23_mech-prototype/links/AC_Game-shortcut.zip) (extract, then open `AC_Game.url`)
- [Prototype wiki](../../../workspace/2026-10-23_mech-prototype/prototype.html)
- [Source inventory](../project-snapshot.md)

The main project uses Unity **6000.5.2f1** and `Assets/Scenes/Prototype Map.unity`.

## Unity 7 alpha experiment

Open `F:\Unity Projects\AC_Game-Unity7` with Unity **7000.0.0a22** for the ECS
experiment on branch `experiment/unity-7-alpha`. On 27 November 2026, the
13 gameplay scripts were grouped under `Assets/Scripts/` in `Player`, `Enemies`,
`Targeting`, `Weapons`, `Combat`, and `UI`. All 13 retained their original
script GUIDs and still belong to the `Mech.Gameplay` assembly.

All 11 Edit Mode tests passed. In Play Mode, 16 of 17 passed. The projectile
pool test also failed with the original folder layout. It timed out waiting
for the enemy to reuse the specific round the player had fired.
