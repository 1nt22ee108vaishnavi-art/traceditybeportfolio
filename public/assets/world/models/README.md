# The artist's character model

`artist.glb` is the artist: a realistic young woman, posed sitting on the end of the jetty with her
legs over the edge and her feet in the water, sitting up comfortably with her palms on the planks beside her, gazing out over the lake.
Her skeleton is kept, and the model carries a `jetty_pose` marker, so the world
(`src/world/three/characterModel.ts`) places it at the jetty's edge and animates it: a gentle sway,
her feet swinging in the water and her gaze wandering over the sky. Without the file, the built-in
figure is shown instead. The loader also accepts a rigged, unposed model and poses it itself, or a
baked, seated model with a `pencil_at` marker.

## How she was made

Built by script with Blender 4.2 LTS and MPFB 2.0.18 (the MakeHuman add-on for Blender):

- Body, face, skin (young caucasian female), eyes, eyebrows, eyelashes, long hair (long01), trimmed to half length:
  MakeHuman system assets, **CC0**.
- Tank top: "toigo_keyhole_tank_top" by Margaret Toigo, **CC0**, retextured plain white.
- Jeans: "elvs_jeans_straight_leg" by **Elvaerwyn**, **CC BY 4.0** (credited on the world page).

Steps: create the human (MPFB `HumanService.create_human`, with joint helpers on and feet-on-ground
off so the skeleton fits the body), add the "game engine" rig, dress her, then pose her with IK and
pole targets, apply the pose to the bones, and export a skinned GLB with WebP textures (with
`export_rest_position_armature` off, so the bones keep the pose). The build and pose
scripts used are `build_human.py` and `pose_jetty.py` (`pose_human.py` made the earlier cross-legged,
sketching pose); ask for them to be added to the repository to rebuild or re-pose her.
