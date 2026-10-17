# World textures

Surface scans used by the 3D world (`src/world/three/textures.ts`). All are from
[Poly Haven](https://polyhaven.com) under **CC0** (public domain; no attribution required),
downloaded at 1k and recompressed to WebP (512 px, or 1024 px for the wood colour maps).

| Files | Poly Haven asset | Used for |
| --- | --- | --- |
| `weathered_planks_*` | [weathered_planks](https://polyhaven.com/a/weathered_planks) | deck, jetty, boat, timber framing |
| `oak_veneer_01_*` | [oak_veneer_01](https://polyhaven.com/a/oak_veneer_01) | desk, shelves, stool |
| `bark_brown_02_*` | [bark_brown_02](https://polyhaven.com/a/bark_brown_02) | tree trunks, jetty posts |
| `rock_boulder_dry_*` | [rock_boulder_dry](https://polyhaven.com/a/rock_boulder_dry) | stones along the bank |
| `forrest_ground_01_*` | [forrest_ground_01](https://polyhaven.com/a/forrest_ground_01) | ground relief (normal and AO only) |

Each set has `_diff` (colour), `_nor_gl` (OpenGL normal) and `_arm` (AO, roughness, metalness).
To swap a texture, replace the files keeping the same names. If a file is missing, the material
keeps its plain colour, so nothing breaks.
