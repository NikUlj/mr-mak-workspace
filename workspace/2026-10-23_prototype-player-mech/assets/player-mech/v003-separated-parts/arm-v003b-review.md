# Player mech v003b: corrected finger pose

Created 24 October 2026. The owner requested a closer match between the fingers of the separate v003 arm and the anatomical right hand (viewer left) in v001.

[Corrected arm](player-mech-right-arm-neutral-v003b.png) | [Original v003 arm](player-mech-right-arm-neutral-v003.png) | [v001 pose reference](../v001-neutral/player-mech-neutral-front-v001.png) | [Saved prompt](prompts/arm-v003b.txt) | [Manifest](arm-v003b.manifest.json)

The four long fingers now bend inward together toward viewer right, making a relaxed open C shape with more compact spacing and natural overlap. The thumb remains separately bent, with its red tip visible. This more closely follows v001 than the straighter, front-facing fingers in v003. Natural overlap is intentional; five digits do not need to be individually exposed in this pose.

Full-size agent inspection found the complete shoulder, 01 marking, crest, upper arm, elbow, forearm, wrist, dark materials and white portrait composition visually consistent with v003. All of the arm and fingertips are inside the frame. Native output: 1024 x 1536 PNG; no upscaling or post-processing.

One completed edit used the built-in image_gen editor; exact model and seed were not exposed. The exact prompt and source/output hashes are saved. This is a generated approximation, with possible small surface-detail changes. Ready for owner review; no mesh or Unity asset was changed.

The earlier v003 image, review, manifest and four-part ZIP are preserved as historical sources; that ZIP contains the original arm.

Following the owner's clarification, v003 and v003b are displayed as separate
visible Versions entries, each with its own stable ID, image, prompt and notes.
Future corrections should be added as new entries unless replacement is requested.

## Delivery verification

Overview and Versions passed the shared card validator and browser checks at 1440, 768 and 390 px in dark and light themes. The v003b image loaded at its native dimensions; prompt expansion, image preview, 100%/fit, close controls and download filename passed. All links in the revised arm entry returned successfully. Desktop and phone screenshots were visually reviewed, with no horizontal overflow. Local verification evidence is retained under `.mrmak/verification/player-mech-v003b/` outside Git. The original v003 arm hash still matches its historical manifest. No application was restarted.
