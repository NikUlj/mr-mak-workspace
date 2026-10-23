# Existing prototypes: file and reuse audit

**21 October 2026 | Initial inspection and Step 1 follow-up; read-only**

Both projects contain useful early foundations. Neither is established as a
complete gameplay loop by this audit. Files and selected source were inspected;
Unity was not launched, builds were not run, and visual quality was not assessed.
No files in either game project were changed.

## Shared starting point

| Item | Horror | Mech |
| --- | --- | --- |
| Folder | `F:\Unity Projects\Dead Space` | `F:\Unity Projects\AC_Game` |
| Pinned editor | Unity `6000.5.2f1` | Unity `6000.5.2f1` |
| Rendering | URP `17.5.0` | URP `17.5.0` |
| Input package | `1.19.0` | `1.19.0` |
| Enabled build scene | `Assets/Scenes/Prototype Map.unity` | `Assets/Scenes/Prototype Map.unity` |

Sources: each project's `ProjectSettings/ProjectVersion.txt`,
`Packages/manifest.json`, and `ProjectSettings/EditorBuildSettings.asset`.
Imported samples and generated Input System code were separated from
game-authored scripts. Raw project file counts are not completion percentages.

## Horror: movement and animation foundation

The authored runtime folder contains `Assets/Scripts/PlayerController.cs`.
The current code uses Unity's CharacterController, camera-relative movement,
walking/sprinting, facing updates, and animator parameters driven from actual
planar velocity. `Assets/Animators/PlayerLocomotion.controller` references nine
FBX motions in a locomotion blend tree; the referenced files resolve to idle,
forward/backward walking/running, and left/right strafe motions.

The project also contains a prototype map, a player prefab, a character import,
and imported gun/sample content. These are starting resources; ownership,
fitness for the intended final style, and replacement needs must be recorded
before treating them as final assets under the self-production plan.

There is a separate animation delivery under
`AnimationDeliverables/LeftStrafe/Revision02/`. Its README records work on stance,
weight transfer, hand alignment, foot clearance, and looping. The associated
`verification/Unity6_Status.json` says Blender FBX reimport was verified but Unity
validation stopped before import because of a licensing error. That is a
historical verification result, not a diagnosis of the machine's current license.
This revision's export is not one of the nine FBX files currently referenced by
the inspected locomotion blend tree.

**Reuse assessment:** Movement and animation setup are potential savings.
Current native acceptance, crossfades, contacts, aim/weapon handling, and the
new strafe revision still need checking. The inspected game-authored runtime
code does not contain a combat, enemy, inventory, or encounter loop. Do not
translate time spent on locomotion into a percentage of the finished horror game.

**Documentation discrepancy:** The project's AGENTS.md describes an older
capsule-cast controller and a missing build scene. Current source uses
CharacterController, and build settings now reference Prototype Map. The audit
uses current files for factual state and leaves the guide untouched.

## Mech: movement, targeting, and shooting foundation

The authored runtime folder contains six scripts: `PlayerController.cs`,
`LockOnAim.cs`, `ShootingController.cs`, `BulletManager.cs`, `BulletType.cs`, and
`IDamageable.cs`. Source shows custom movement/collision handling, target
selection around a crosshair, firing/cooldown logic, pooled projectiles,
configurable bullet properties, and a damage interface. The project has a
prototype map and player, camera, bullet, and trail prefabs.

The inspected custom scripts do not provide a run/progression system, modular
mech assembly, enemy AI, or implemented health receiver. The presence of a
damage interface is not evidence that combat encounters are complete.

Two source observations make a repair allowance appropriate before assuming
these systems can be reused unchanged: the shooting sound branch calls
`muzzleFlash.Play()` rather than the audio source, and piercing decrements a
struct passed by value in `HandleBulletImpact`, so that decrement is not written
back into the active projectile state by that method. These observations were
not runtime-tested and no fixes were applied.

**Reuse assessment:** This prototype contains more combat-related source than
the horror prototype. That is useful, but code volume does not establish good
combat feel or reduce the future mech/content burden by a known amount.

## What this changes in the research

- Both ideas should be costed from their actual starting point, not from zero.
- Neither should win because of sunk work. Estimate verified future savings
  after integration, repair, and replacement costs.
- The animation deliverables provide a concrete example of iteration and
  engine-validation work to include in AI-assisted production estimates.
- Favor short, controlled runtime checks when judging reusability. Record the
  exact editor/build, game camera, controls, transitions, and observed defects.
- No engine migration is assumed. An incremental prototype can be evaluated in
  the owner's existing Unity workflow unless there is a reason to change it.

## Step 1 follow-up: connections and animation coverage

The follow-up inspected the player/camera prefabs, scene overrides, the horror
Animator Controller, animation import metadata, and authored runtime source.
It strengthens the reuse assessment without establishing runtime quality.

| Check | Evidence | Meaning for reuse |
| --- | --- | --- |
| Horror player connections | `Assets/Prefabs/Player.prefab` assigns `cameraHolder`, `model`, and `animator`; the referenced Animator component is present. | The controller is wired to a player setup, not just an unattached source file. |
| Horror camera target | `Assets/Scenes/Prototype Map.unity` supplies `Target.TrackingTarget`; the referenced scene Transform exists. | The camera prefab's empty default target is supplied by the scene. Camera feel and obstruction handling remain untested. |
| Horror locomotion coverage | `Assets/Animators/PlayerLocomotion.controller` has one base layer and one Locomotion state, nine blend-tree motions, no state transitions, and `MoveX`/`MoveY` parameters. | Direction/speed blending exists as configuration. Aim, reload, hit/death, and interaction transitions are not implemented by this controller. |
| Horror rig dependence | All ten FBX import metadata files in `Assets/Animations/Player/` name the same avatar-source GUID, resolving to `Assets/Imports/Y Bot.fbx.meta`. | Current animation setup is tied to a shared imported character source. A final self-created character still needs mapping, deformation, contact, and scale checks. This does not establish that clips cannot be retargeted. |
| Horror contact correction | The Locomotion state has `m_IKOnFeet: 0` and the layer has `m_IKPass: 0`; code disables root motion. | No foot-IK pass is configured in this controller. This alone does not prove foot sliding, and it does not prove an IK solution is necessary. Judge contacts in motion. |
| Mech scene dependencies | Scene overrides assign both camera/crosshair references, the movement controller's `lockOnAim`, shooting's `bulletManager`, and the camera tracking target. All seven inspected object references resolve in the scene. | Empty defaults in the standalone prefab are not, by themselves, missing scene connections. The prototype depends on its scene wiring; moving the prefab needs integration work. |
| Mech projectile damage | `BulletManager.cs` calls `IDamageable.TakeDamage`; the custom-script inventory contains the interface but no implementing health receiver. | Projectile/targeting logic is a foundation, not a verified damage/death/encounter loop. |

These are file-level observations. Imported FBX sub-assets, package behavior,
runtime execution order, and visual acceptance were not validated by resolving
scene IDs.

### Native validation still needed

The read-only command `unity status --format json --non-interactive --no-pager`
returned `STATUS_NO_INSTANCES`: no registered Pipeline-connected Editor was
found. It did not diagnose a current license failure. The running `unity.exe`
process inspected was the CLI executable, not evidence of an open game Editor.
No Editor was started, no package installed, and no project file changed.

When runtime checks are performed, preserve the original projects and use the
pinned Editor. Record the project/scene, input, observed result, and any repair
time. Do not add missing gameplay merely to make an audit pass.

1. **Horror movement:** check idle to/from movement, all directions at walk and
   sprint speeds, direction reversals, camera turns, and collision/stopping.
   Review feet and hands from the intended game camera.
2. **Horror animation transfer:** evaluate Revision02 separately in a disposable
   test copy before claiming it is integrated. Check the intended final rig when
   one exists. Blender reimport alone is insufficient.
3. **Mech controls and aim:** check movement, jump/dash, obstacles, target
   acquisition/loss, occlusion, and camera/crosshair behavior at different window
   sizes. Verify the scene-assigned references at runtime.
4. **Mech projectiles:** check firing, collisions, pooling, effects/audio, and
   penetration behavior against configured limits. A damage/death check requires
   a real receiver or an explicitly identified diagnostic fixture; neither is
   established by the current source audit.

Until these checks exist, later estimates should present rebuilding and
successful-reuse cases rather than a single asserted hours-saved figure.

This supports the [Step 1 research baseline](constraints-and-reuse.md); it is not
a full code review, an asset license audit, or a playable-quality verdict.
