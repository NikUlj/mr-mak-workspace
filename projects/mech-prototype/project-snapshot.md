# AC_Game source inventory

**Inspected: 23 October 2026 | Read-only file inspection | Runtime unverified**

The owner identified `F:\Unity Projects\AC_Game` as the current Mech Prototype
project and approved keeping it there, linked from Workspace. This inventory
uses that project's current files, not Project Playground's proposed concept.
The [Prototype tab](../../workspace/2026-10-23_mech-prototype/prototype.html)
presents the current project details.

All paths below are relative to the external Unity folder unless otherwise
specified. No Unity source, scene, prefab, package, or project setting was changed.

## Configuration and revision

| Fact | Source |
| --- | --- |
| Unity 6000.5.2f1, revision eb73d3b415a1 | `ProjectSettings/ProjectVersion.txt` |
| One enabled build scene: `Assets/Scenes/Prototype Map.unity` | `ProjectSettings/EditorBuildSettings.asset` |
| Global input asset: `Assets/Input/InputSystem_Actions.inputactions` | Input GUID in build settings resolves to this asset's `.meta` |
| Default render pipeline: `Assets/Settings/PC_RPAsset.asset` | Graphics settings GUID resolves to its `.meta` |
| Product name: AC; not a confirmed final title | `ProjectSettings/ProjectSettings.asset` |
| Both input backends permitted (`activeInputHandler: 2`) | `ProjectSettings/ProjectSettings.asset` |
| Git HEAD: `442c185`, subject `Movement fixes` | Local Git history, without author or remote details |
| Modified: Player prefab, Prototype Map scene, PlayerController.cs | Local Git working tree at inspection |

The inventory includes the local modifications. HEAD alone does not identify
the inspected working copy. The matching Editor is installed at
`F:\Unity Versions\6000.5.2f1\Editor\Unity.exe`; no connected Editor was found
by the read-only Unity CLI checks. The manifest does not include Pipeline.
No license failure, compilation result, or Play-mode result was established.

## Main packages

From `Packages/manifest.json`:

| Package | Version |
| --- | --- |
| Universal Render Pipeline | 17.5.0 |
| Input System | 1.19.0 |
| Cinemachine | 3.1.7 |
| AI Navigation | 2.0.13 |
| Timeline | 1.8.12 |
| uGUI | 2.5.0 |
| Test Framework | 1.7.0 |
| Visual Scripting | 1.9.11 |

Presence of Navigation, tests, mobile renderer assets, or imported samples
does not establish implemented gameplay or supported release platforms.

## Authored runtime systems

The six scripts in `Assets/Scripts/` are:

- `PlayerController.cs`: camera-relative custom velocity movement, ground/air
  friction and acceleration, gravity, capsule casts, collision sliding,
  stepping, jump and dash, model facing, mouse look, cursor locking, and a
  target frame-rate request of 60. A frame-rate request is not a measurement.
- `LockOnAim.cs`: checks Target-layer colliders near the crosshair, rejects
  targets behind the camera, checks visibility by raycast, selects the nearest
  qualifying target, and changes crosshair color. The prefab configures range
  20, crosshair radius 6.5% of screen height, and a buffer of 30 colliders.
- `ShootingController.cs`: held Attack action, 0.25-second cooldown, selected
  target or crosshair-ray aim, and calls into BulletManager.
- `BulletManager.cs`: per-type projectile pools, movement and raycast impacts,
  optional gravity/piercing/effects/audio, and IDamageable dispatch. The scene
  pool size is 30 and the collision mask includes all layers.
- `BulletType.cs`: ScriptableObject data for visual, damage, speed, lifetime,
  gravity, piercing and effects settings.
- `IDamageable.cs`: damage interface only.

No health/death implementation, enemy AI, modular mech assembly, or run and
progression system was found in these authored scripts. Imported sample
scripts and generated `Assets/Input/InputSystem_Actions.cs` are separate
from the authored inventory.

## Scene and prefab wiring

The scene instantiates `Assets/Prefabs/Player.prefab`,
`Assets/Prefabs/ThirdPerson Camera.prefab`, and
`Assets/Prototype Map/Prefabs/PrototypeMap.prefab`. It also contains a main
camera, HUD/crosshair, event system, managers, lighting, and a Target-layer
object. The player prefab includes Body, Eyes, Gun, BulletSpawnPoint,
PlayerAimCore, Model and CameraLookFollowTarget objects.

Seven nonzero scene-assigned object references resolve to objects/components
in the scene file: two player-camera references, two crosshair references,
the movement controller's aim reference, the shooting controller's bullet
manager reference, and the Cinemachine tracking target. Blank defaults in
the standalone prefab are supplied by scene overrides. The player prefab
has no Animator, legacy Animation, or skinned-mesh component.

The third-person camera prefab sets field of view 60 and camera distance 5;
the scene overrides its tracking target and shoulder/arm settings. File
reference resolution does not verify camera feel or runtime execution.

## Configured controls

`Assets/Input/InputSystem_Actions.inputactions` defines the Player action map.
PlayerController reads Move, Look, Jump and Dash; ShootingController reads
Attack.

| Action | Keyboard and mouse | Gamepad |
| --- | --- | --- |
| Move | WASD / arrows | Left stick |
| Look | Pointer delta | Right stick |
| Jump | Space | South face button |
| Dash | Left Shift | Left stick press |
| Attack | Hold left mouse / Enter | Hold west face button |

Target selection is automatic rather than a bound lock button. Other
touch, joystick and XR bindings are present but untested. Interact, Crouch,
Previous and Next are declared but unused by the six authored scripts.
No authored pause or cursor-unlock action was found in those scripts.

## Existing assets

- Player and camera: `Assets/Prefabs/Player.prefab`,
  `Assets/Prefabs/ThirdPerson Camera.prefab`, and Gun/Eyes materials.
- Test map: `Assets/Prototype Map/Models/PrototypeMap.FBX`, its prefab,
  `PrototypeMap_Gridbox` material/texture, and the configured scene.
- Projectiles: `Assets/Prefabs/Bullet.prefab`, `BulletTrail.prefab`,
  `Assets/Materials/Bullet.mat`, and
  `Assets/Scriptable Objects/DefaultBulletType.asset`.
- Crosshair: `Assets/Images/Crosshair.png` and `CrosshairRed.png`.
- Imported references: `Assets/Samples/Cinemachine/3.1.3/`, including sample
  scenes, scripts, prefabs, Cameron model and animation clips. This sample
  version differs from the current 3.1.7 package dependency.
- Renderer/volume settings under `Assets/Settings/`, including PC and Mobile
  variants. These are configuration assets, not chosen release targets.

DefaultBulletType uses damage 10, speed 20, lifetime 30, piercing off, gravity
off, with no impact effect or fire/impact audio assigned. The catalogue records
existing assets at their actual Unity paths. No generation provenance or
license review was established; no newly generated media was created or
copied during this task.

## Existing build

`Build/AC.exe` exists with `AC_Data/`, UnityPlayer.dll and runtime dependencies.
Its file size is 667,648 bytes; last-modified time is
**2026-07-13 21:42:45.628 UTC**. This is file metadata, not proof of build date
or source revision. Keep the supporting files with the executable.

It was not launched. Its match to the current working tree, its Editor
version, and runtime quality remain unverified. It is not a verified
deliverable of this Workspace task.

## Source observations to investigate

- `ShootingController.cs` checks shootSound but calls `muzzleFlash.Play()` in
  that branch. Both effect references are currently unassigned in the prefab.
- `BulletManager.HandleBulletImpact` takes BulletData by value, so its
  penetration decrement is not returned to active projectile state. Piercing
  is off in the default bullet asset.
- Existing TODOs in `Assets/AAA/TODO.txt`, translated into English: inspect
  slope handling before movement for frame-rate-independent stepping; improve
  lock-on and main/virtual camera references; review Quake-style movement
  mathematics; clean up code; compare overlap and cast ground checks; consider
  shifting the cast origin by skin width instead of extending its distance.

These observations were not reproduced in a running game. No fixes were made.
The next runtime check should cover movement, jump/dash, slopes and steps,
camera, targeting/occlusion, projectile pooling/impacts, resizing and gamepad
behavior before claiming reuse quality or using it for production estimates.
