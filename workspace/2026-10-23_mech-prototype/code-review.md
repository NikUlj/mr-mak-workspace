# Mech Prototype: where development stopped

**Reviewed 24 October 2026.** Current working copy: `F:\Unity Projects\AC_Game`. This review includes the uncommitted changes, all six authored gameplay scripts, their scene/prefab settings, input bindings, Git history, and selected historical Editor diagnostics.

**You left off refining the custom movement controller, particularly steps, slopes and jump collisions.** Movement, third-person camera control, automatic aim selection and pooled shooting are implemented. There is no complete combat encounter or roguelite game loop yet. The current code compiles against the cached Unity dependencies; its present behavior has not been verified in Play mode.

## The stopping point

The active branch is **`side`**, at **`442c185` — “Movement fixes”, 18 July 2026**. `main` still points to an April 2025 initial commit, and `RB_controller` points to an older controller experiment. Resume from the current `side` working copy; switching to `main` would show a much earlier state.

| When | Checkpoint | What it establishes |
| --- | --- | --- |
| 12–13 April 2025 | Basic movement updates | Early controller foundation. |
| 16 April 2025 | `466e964` — Lockon | Target selection work was underway. |
| 22–25 April 2025 | Controller experiments, movement with minor issues, capsule collider | Movement and collision handling were the main focus. |
| 26 April 2025 | `e716925` — Shooting controller | Shooting implementation and projectile configuration were added. |
| 8 May 2025 | `52e1f14` — Shooting works | Latest commit touching the shooting and bullet-manager scripts. The message records the developer's checkpoint, not a new playtest result. |
| 18 July 2026 | `442c185` — Movement fixes | Collision filtering, player collision/prefab cleanup, movement tuning and step-path selection changes; the same commit upgrades Unity from 6000.0.44f1 to 6000.5.2f1. |
| After that commit | Three uncommitted files | More movement/step collision work remains in the working tree. The controller file's last-write metadata is 19 July 2026; metadata alone cannot date every edit. |

### The uncommitted work

- **`Assets/Scripts/PlayerController.cs`:** requests 60 FPS instead of 0; separates “cast hit something” from “hit distance exceeds skin width” in the step-down and jump-up branches. These edits avoid running the no-hit fallback when an obstruction is already very close. They look like continued collision debugging, not a new feature branch.
- **`Assets/Prefabs/Player.prefab`:** changes `stepSize` from **0 to 0.3**, re-enabling the step-up allowance.
- **`Assets/Scenes/Prototype Map.unity`:** removes many player instance overrides so those settings inherit from the prefab, and adds a movement-controller aim reference. This is largely prefab/scene cleanup; it does not add a new gameplay system.

The existing TODO file specifically calls for examining slopes before movement to fix frame-rate-dependent step height. It also asks for better lock-on/camera references, checking the Quake-style movement mathematics, code cleanup, reconsidering ground casts versus overlap tests, and revisiting skin-width handling. Those notes align with the latest code changes. They are still open tasks, not evidence that each proposed approach is the right fix.

Evidence: local Git history and diff; `Assets/AAA/TODO.txt`; controller lines 89, 238–330; player prefab line 461.

## What is already implemented

Here, **implemented** means code and configuration exist. It does not mean the feature passed a fresh gameplay test.

| Area | Existing behavior | State and limits |
| --- | --- | --- |
| Player movement | Camera-relative movement, acceleration, ground/air friction, gravity, ground checks, jump and directional dash | Substantial prototype implementation. Dash adds an impulse when pressed; no energy cost, recharge or cooldown. No hover or sustained boost implementation. |
| Collision and stepping | Capsule sweeps, collision sliding, comparison of raised versus unraised movement paths, step-down correction | Main unfinished engineering area. Custom transform movement rather than a Rigidbody-driven controller; slope and ceiling handling need focused validation. |
| Camera | Mouse look, pitch limits, model facing, Cinemachine third-person follow and obstacle settings | Wired in the scene. No complete control/settings interface. Gamepad look uses the mouse-oriented calculation. |
| Targeting | Searches Target-layer colliders, checks whether they are in front of the camera and near the crosshair, raycasts for visibility, selects the nearest qualifying target, colors the crosshair | Automatic soft targeting. No explicit lock/unlock control, target cycling, sticky lock, predictive lead or complex enemy target model. Configured range is 20 units, with a 30-collider buffer and a targeting radius of 6.5% of screen height. |
| Shooting | Hold Attack to fire repeatedly; aim at the selected target or a camera/crosshair ray point; launch from the gun | One basic firing setup with a configured 0.25-second cooldown. No weapon inventory, switching, ammo, reload or weapon-specific firing behaviors. |
| Projectiles | Per-BulletType pools, visual/trail reuse, lifetime, forward movement, swept raycast impacts, damage dispatch | Reusable foundation. The pool starts with 30 bullets and expands when exhausted. Damage is dispatched only to an IDamageable component on the hit collider's own GameObject. |
| Bullet data | ScriptableObject fields for visual, color, damage, speed, lifetime, piercing, gravity, sounds and impact effects | Data supports more than the default configuration currently demonstrates. Piercing and gravity paths contain defects described below. |
| Test environment | Prototype Map scene, map prefab/model, placeholder player body/eyes/gun, camera, crosshair, manager and Target object | A movement/shooting test scene. No authored encounter or mission implementation was found. |

### Settings that matter when returning

Read the **prefab and scene**, not just the C# field initializers: several runtime values differ substantially from the code defaults.

The current player prefab sets ground speed **20**, air speed **8.128**, ground acceleration **10**, air acceleration **6**, gravity **20**, jump velocity **20**, dash impulse **100**, step size **0.3**, and skin width **0.075**. These are tuning values, not measured movement performance. The enabled scene supplies the external camera, crosshair and BulletManager references; blank prefab fields do not automatically indicate broken scene wiring.

The default bullet has damage **10**, speed **20**, lifetime **30 seconds**, with **piercing and gravity disabled**. Muzzle flash, firing/impact audio and impact effect references are unassigned. The player has no Animator or skinned-mesh component: the new mech artwork has not replaced the placeholder with a rigged gameplay model.

Configured keyboard/mouse controls: **WASD/arrows** move, **mouse** looks, **Space** jumps, **Left Shift** dashes, and **hold left mouse/Enter** fires. Gamepad bindings exist for both sticks, south/west face buttons and left-stick press, but gamepad support is unfinished. Interact, Crouch, Previous and Next actions are declared without authored gameplay consumers.

Evidence: `Assets/Scripts/`; `Assets/Prefabs/Player.prefab`; `Assets/Prefabs/ThirdPerson Camera.prefab`; `Assets/Scenes/Prototype Map.unity`; `Assets/Scriptable Objects/DefaultBulletType.asset`; `Assets/Input/InputSystem_Actions.inputactions`.

## Review findings

These are source findings unless explicitly labeled historical evidence. Priority reflects what should be checked when resuming the prototype, rather than a claim about production severity.

### 1. Movement collision resolution remains incomplete

**Priority: first runtime investigation; relevant to the current player.**

`CollideAndSlide` discards the vertical component of every collision normal before projecting the remaining movement (`PlayerController.cs`, lines 359–364). A horizontal floor/ceiling normal therefore becomes zero, and a slope loses its vertical surface information. The resolver also does not return a collision-adjusted persistent velocity. In the airborne path, hitting a ceiling does not explicitly clear upward velocity.

This is a strong reason to test low ceilings, airborne wall collisions, slopes and landings before trusting the controller. It is not proof of a specific observed clipping or sticking bug. The step-up/down path and the author's frame-rate TODO need review together; simply requesting 60 FPS does not establish frame-rate independence.

### 2. Crosshair coordinates become stale after resizing or layout changes

**Priority: fix during the prototype stabilization pass.**

`LockOnAim` calculates crosshair screen position once in `Awake` (line 37). Its dimensions callback updates only the radius (lines 48–50), not the position. `ShootingController` then takes its own one-time copy in `Start` (line 37). After a window resize or HUD layout change, both target acquisition and free aiming can continue using the old screen point while the visible crosshair has moved.

Update the screen position when layout/resolution changes and have shooting consume the current value. Verify both target highlighting and shot alignment after changing the window size.

### 3. Gamepad movement and look need their own treatment

**Priority: before treating controller bindings as supported input.**

Movement unconditionally normalizes the desired direction (`PlayerController.cs`, lines 106–119), discarding the left stick's input magnitude. Partial stick deflection therefore does not provide proportional requested movement speed. Look applies sensitivity per rendered frame without a time factor (lines 394–405). That is appropriate to inspect separately for pointer delta and a held right-stick value; the latter currently produces a frame-rate-dependent rotation rate. Both devices feed the same Look action without binding processors that address this difference.

### 4. The firing-audio branch calls the wrong component

**Priority: small, definite fix when adding effects.**

`ShootingController.cs`, line 62, checks `shootSound` but calls `muzzleFlash.Play()`. Assigning a shooting AudioSource will not play that source; assigning it without a muzzle flash can throw an exception. Both references are currently empty, so this branch is dormant in the inspected setup.

### 5. Piercing does not retain its penetration count

**Priority: before enabling piercing ammunition.**

`BulletData` is a struct. `HandleBulletImpact` receives it by value (line 102), decrements that copy (line 127), and returns only a boolean. The active bullet never receives the updated count. With `maxPenetration` greater than one, separate impacts cannot exhaust the configured budget as intended. Pass updated state back, and verify exactly N distinct damageable hits followed by despawning. Piercing is disabled in the default bullet.

### 6. The optional projectile-gravity calculation is unfinished

**Priority: before enabling ballistic ammunition.**

`BulletManager.cs`, lines 58–65, calculates a gravity-adjusted `movement` vector but never uses it. Instead it subtracts a term proportional to `deltaTime²` from a normalized direction while retaining constant scalar speed, then moves with that direction (line 94). This does not implement accumulated ballistic velocity and makes the trajectory depend on frame rate. Store velocity, integrate acceleration over time, and raycast along the resulting displacement. Gravity is disabled in the default bullet.

### Other gaps to retain on the checklist

- The bullet collision mask includes **all layers**, project physics queries include triggers, and the bullet prefab itself has trigger colliders. There is no owner/team filtering. Check unwanted player, projectile and trigger hits before expanding combat. This is a configuration risk, not a reproduced current collision failure.
- Impact effects are instantiated without manager-owned cleanup; any chosen effect prefab must manage its own lifetime or use a pool.
- Reference validation is limited. Several systems assume required camera, UI and manager references exist. A standalone Player prefab still depends on scene-provided references.
- There is no authored pause/cursor-release flow. The controller locks the mouse in Awake.
- Unused serialized fields and commented experimental paths remain. These can be cleaned up after movement behavior is understood.

## What is unfinished or absent

**Started but unfinished:** robust slope/step/ceiling behavior; lock-on refinement and camera reference cleanup; correct gamepad behavior; weapon effects/audio; optional piercing and gravity; damage reception beyond an interface; regression tests and a verified current build.

**No implementation found in the authored project code:**

- Player/enemy health, death, respawn or destruction.
- Enemy movement, AI, attacks, spawning and encounter completion.
- Mech parts, assembly/loadouts, part statistics or equipment management.
- Energy, boost economy, heat, stagger or other expanded combat resources.
- Run/session state, room or mission progression, rewards, upgrades, loss/victory and restart.
- Persistent progression or save/load.
- A gameplay HUD beyond targeting, pause/settings menus, or a complete animation system for the player mech.

These are implementation gaps relative to the broad Armored Core-inspired roguelike/roguelite direction. They are **not an approved feature specification**. Exact combat mechanics, first milestone, run structure and persistent progression remain design decisions.

The separate player-mech card currently contains v001 neutral-front artwork and a v002 modular reference sheet. They are visual references awaiting further review/model production, not imported modular 3D parts or an assembly system.

## Verification and limits

- Confirmed Unity **6000.5.2f1**, URP **17.5.0**, and the single enabled build scene `Assets/Scenes/Prototype Map.unity`.
- Compiled the six authored gameplay scripts with the installed Unity-bundled Roslyn compiler and cached dependency references: **exit code 0**. Then compiled the complete C# source list in the project's existing compiler response file: **exit code 0**. This checks C# compilation, not Unity import, shader compilation, scene execution or gameplay.
- Historical `Logs/Editor.log` contains BulletManager null-reference errors at its Update loop and an intermediate PlayerController compile error concerning the CompareDistance out parameter. The current source initializes the bullet list in Awake, supplies that parameter, and compiles. These old diagnostics are reasons for a fresh Console check, not confirmed unresolved current failures.
- No authored test files or assembly definitions were found. Having Unity's Test Framework installed does not provide gameplay coverage.
- An existing `Build/AC.exe` is present. Its 13 July 2026 last-write metadata predates the latest commit; its source revision and correspondence to the current working copy are unknown. It was not launched or rebuilt.
- No Unity Editor or game was launched for this review. No claim is made that movement, firing or targeting currently runs correctly.
- The new Code review tab was checked in the repository's browser preview at 1440, 768 and 390 pixels in dark and light themes. Headings, tables, tab selection, reading width and internal report links passed; desktop and phone-width screenshots were visually inspected. The running desktop application was not restarted.
- Hash checks cover the six scripts, player prefab, scene, default bullet asset, input asset, package manifest and Unity version file. No changes to these files were made by the review. One generated reference assembly in Unity's ignored compiler cache was regenerated during compilation; review outputs remain in Workspace's ignored cache. The three pre-existing uncommitted Unity changes were preserved.

## A practical place to resume

This is a suggested sequence, not a newly agreed milestone.

1. **Preserve the current baseline.** Keep the `side` branch and its three local changes together. Make a reviewed checkpoint before refactoring.
2. **Reopen the existing scene in Unity 6000.5.2f1 and stabilize movement.** Check a clean Console, flat ground, step heights around 0.3 units, shallow/steep slopes, low ceilings, corners, landing, jump and repeated dash. Compare 30/60/120 FPS conditions, including the current VSync/frame-cap settings. Resolve the collision model before extensive tuning.
3. **Finish the aiming/input pass.** Verify window resizing, target acquisition/loss/occlusion and mouse versus gamepad. Correct the small audio defect when wiring effects. Keep optional projectile features disabled until their implementations are corrected and tested.
4. **Propose the smallest complete combat test.** A damageable target, player health, one enemy capable of attacking, and death/restart would let the existing movement and shooting be evaluated together. Agree the scope before implementing it; then build outward toward run structure and mech customization.

Project context: [Prototype status](prototype.html) and [decision log](decisions.md). The earlier source inventory is stored at `projects/mech-prototype/project-snapshot.md` in Workspace.
