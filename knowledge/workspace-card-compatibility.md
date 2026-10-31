# Workspace card compatibility

Confirmed on 23 October 2026 while checking Prototype Player Mech.

The running desktop app was **0.5.2**, while this repository contained **0.6.0**
source and authoring instructions. Version 0.5.2 opens `.card.json` tabs as raw
JSON; 0.6.0 adds the editable Gallery and Research card viewer. Updating project
content or verifying it with the repository's browser preview does not update
the installed desktop app.

Before using a viewer feature, check the running service's `/health` version
and compare it with the feature's release. The local service origin is recorded
in `.mrmak/runtime.json`.

The issue was reproduced using the installed 0.5.2 runtime with an isolated copy
of the cards. The official 0.6.0 Windows installer was downloaded and checked
against its published SHA-256 digest. Its extracted service and UI rendered all
three player-mech tabs, opened their editors and previews at 1440, 768, and
390 px, and followed the link from Mech Prototype's Assets tab. This verification
did not install the update or restart the running app.

Release: [Mr. Mak Workspace v0.6.0](https://github.com/witnesstodark/mr-mak-workspace/releases/tag/v0.6.0).
Follow [the update instructions](../docs/updating.md) and obtain restart permission
before applying an update to the running desktop app.
