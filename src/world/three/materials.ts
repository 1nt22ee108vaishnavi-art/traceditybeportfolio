import {
  AdditiveBlending, BackSide, Color, DoubleSide, MeshStandardMaterial, NormalBlending, ShaderMaterial, Vector2, Vector3, Vector4,
  type MeshStandardMaterialParameters, type Texture
} from 'three'

// Surfaces with soft, natural shading: matte, like painted wood, cloth, leaves and paper.
export const surface = (color: string, extra: MeshStandardMaterialParameters = {}) =>
  new MeshStandardMaterial({ color, roughness: 0.88, metalness: 0, ...extra })

export const DUCKS = 6

// Light, air and weather shared by every custom shader, updated each frame from the current mood.
export const world = {
  uTime: { value: 0 },
  uSunDir: { value: new Vector3(0, 1, 0) },
  uLightDir: { value: new Vector3(0, 1, 0) },
  uSunColor: { value: new Color() },
  uSunIntensity: { value: 1 },
  uHemiSky: { value: new Color() },
  uHemiGround: { value: new Color() },
  uHemiIntensity: { value: 1 },
  uFogColor: { value: new Color() },
  uFogNear: { value: 60 },
  uFogFar: { value: 750 },
  uSkyTop: { value: new Color() },
  uHorizon: { value: new Color() },
  uWater: { value: new Color() },
  uStars: { value: 0 },
  uMoonDir: { value: new Vector3(-0.45, 0.62, -0.65).normalize() },
  uSunUp: { value: 1 },
  uRain: { value: 0 },
  uWet: { value: 0 },
  uGloom: { value: 0 },
  // Each duck on the lake: x, z, speed and whether it is above water.
  uDucks: { value: Array.from({ length: DUCKS }, () => new Vector4(0, 0, 0, 0)) }
}

const noise = /* glsl */`
float hash21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
}`

const fog = /* glsl */`
vec3 applyFog(vec3 color, vec3 worldPosition){
  float distance = length(worldPosition - cameraPosition);
  // Aerial perspective: distance takes on the colour of the air, a little more quickly near the ground.
  float amount = smoothstep(uFogNear, uFogFar, distance);
  amount = 1.0 - (1.0 - amount) * (1.0 - smoothstep(uFogNear * 0.5, uFogFar * 2.0, distance) * 0.35);
  return mix(color, uFogColor, clamp(amount, 0.0, 1.0));
}`

const lightUniforms = /* glsl */`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uLightDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uHemiSky;
uniform vec3 uHemiGround;
uniform float uHemiIntensity;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uSunUp;
uniform float uWet;
uniform float uRain;`

// The wind: slow gusts rolling across the land, shared by grass, flowers and leaves.
const wind = /* glsl */`
float gust(vec2 p){ return noise(p * 0.07 + vec2(uTime * 0.22, uTime * 0.08)); }
float breeze(vec3 p){ return sin(uTime * 1.5 + p.x * 0.55 + p.z * 0.35) * 0.45 + (gust(p.xz) - 0.4) * 1.6; }`

// Grass and wildflowers sway in the wind; against the sun their tips glow, and their roots sit in shade.
const swayVertex = /* glsl */`
uniform float uTime;
uniform float uRain;
attribute float aShade;
varying float vHeight;
varying float vShade;
varying vec3 vWorld;
#ifdef USE_COLOR
varying vec3 vColor;
#endif
${noise}
${wind}
void main(){
  vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
  float h = uv.y;
  float sway = breeze(world.xyz) * (0.11 + uRain * 0.05) * h * h;
  world.x += sway;
  world.z += sway * 0.35;
  world.y -= abs(sway) * 0.25 * h;
  vHeight = h;
  vShade = aShade;
  vWorld = world.xyz;
  #ifdef USE_COLOR
  vColor = color;
  #endif
  gl_Position = projectionMatrix * viewMatrix * world;
}`

const swayFragment = /* glsl */`
${lightUniforms}
uniform vec3 uBase;
uniform vec3 uTip;
uniform vec3 uAltBase;
uniform vec3 uAltTip;
varying float vHeight;
varying float vShade;
varying vec3 vWorld;
#ifdef USE_COLOR
varying vec3 vColor;
#endif
${fog}
void main(){
  #ifdef USE_COLOR
  vec3 albedo = vColor * (0.85 + vShade * 0.3);
  #else
  vec3 albedo = mix(mix(uBase, uTip, vHeight), mix(uAltBase, uAltTip, vHeight), smoothstep(0.45, 0.7, vShade)) * (0.82 + fract(vShade * 7.3) * 0.36);
  #endif
  albedo *= 1.0 - uWet * 0.25;
  // Shade gathers at the roots, where blades crowd together.
  float occlusion = mix(0.45, 1.0, smoothstep(0.0, 0.7, vHeight));
  vec3 light = mix(uHemiGround, uHemiSky, 0.4 + vHeight * 0.6) * uHemiIntensity * 0.8 * occlusion + uSunColor * uSunIntensity * 0.3 * uSunUp * (0.55 + vHeight * 0.45);
  vec3 view = normalize(vWorld - cameraPosition);
  float back = pow(max(dot(view, normalize(uSunDir)), 0.0), 5.0) * vHeight * uSunUp;
  vec3 color = albedo * light + albedo * uSunColor * back * uSunIntensity * 0.6;
  // Wet tips catch a little sky.
  color += uHemiSky * uWet * 0.06 * vHeight;
  gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
}`

export function swayMaterial(base: string, tip: string, altBase: string, altTip: string, vertexColors = false){
  return new ShaderMaterial({
    uniforms: {
      ...world,
      uBase: { value: new Color(base) }, uTip: { value: new Color(tip) },
      uAltBase: { value: new Color(altBase) }, uAltTip: { value: new Color(altTip) }
    },
    vertexShader: swayVertex,
    fragmentShader: swayFragment,
    side: DoubleSide,
    vertexColors
  })
}

// Foliage: leaf-cluster cards arranged in clumps. Each card's normal points out from the crown, so the
// crown is lit as a soft, painted mass rather than as flat cards: lit side, a soft terminator, a cool
// shaded side, deep occlusion inside the crown, and a glow where the sun shines through the leaves.
const foliageVertex = /* glsl */`
uniform float uTime;
uniform float uRain;
attribute float aOcclusion;
varying vec3 vNormalWorld;
varying vec3 vWorld;
varying vec2 vUv;
varying float vOcclusion;
varying vec3 vTint;
${noise}
${wind}
void main(){
  mat4 model = modelMatrix * instanceMatrix;
  vec4 world = model * vec4(position, 1.0);
  float height = max(0.0, position.y - 1.0);
  float sway = breeze(world.xyz + vec3(instanceMatrix[3].x)) * (0.02 + uRain * 0.015) * height;
  world.x += sway + sin(uTime * 2.3 + position.x * 3.0 + position.z * 2.0) * 0.012 * height;
  world.z += sway * 0.5;
  vWorld = world.xyz;
  vNormalWorld = normalize(mat3(model) * normal);
  vUv = uv;
  vOcclusion = aOcclusion;
  vTint = color;
  gl_Position = projectionMatrix * viewMatrix * world;
}`

const foliageFragment = /* glsl */`
${lightUniforms}
uniform sampler2D uMap;
varying vec3 vNormalWorld;
varying vec3 vWorld;
varying vec2 vUv;
varying float vOcclusion;
varying vec3 vTint;
${fog}
void main(){
  vec4 leaf = texture2D(uMap, vUv);
  // Far away, fine leaves blur into their mipmaps; a lower cut-off keeps distant crowns full.
  if (leaf.a < mix(0.5, 0.12, smoothstep(12.0, 140.0, length(vWorld - cameraPosition)))) discard;
  vec3 n = normalize(vNormalWorld);
  vec3 l = normalize(uLightDir);
  float wrap = dot(n, l) * 0.5 + 0.5;
  // A soft painted terminator rather than a hard cel line.
  float lit = smoothstep(0.38, 0.72, wrap) * uSunUp;
  vec3 albedo = vTint * (0.55 + leaf.r * 0.6) * (1.0 - uWet * 0.2);
  vec3 sky = mix(uHemiGround, uHemiSky, n.y * 0.5 + 0.5) * uHemiIntensity;
  vec3 color = albedo * (sky * 0.62 * vOcclusion + uSunColor * uSunIntensity * 0.42 * lit * mix(0.55, 1.0, vOcclusion));
  vec3 view = normalize(vWorld - cameraPosition);
  float through = pow(max(dot(view, normalize(uSunDir)), 0.0), 6.0) * uSunUp * (1.0 - vOcclusion * 0.5);
  color += albedo * uSunColor * through * uSunIntensity * 0.45;
  gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
}`

export function foliageMaterial(map: Texture){
  return new ShaderMaterial({
    uniforms: { ...world, uMap: { value: map } },
    vertexShader: foliageVertex,
    fragmentShader: foliageFragment,
    side: DoubleSide,
    vertexColors: true
  })
}

// The lake: a mirror (three's Reflector) seen through ripples, deeper and darker away from the shore,
// clear and green-gold in the shallows, with lapping lines at the bank, rings around each duck, a wake
// behind it, rain rings in the rain, and glints of sun.
export const lakeShader = {
  name: 'LakeShader',
  uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null } },
  vertexShader: /* glsl */`
    uniform mat4 textureMatrix;
    attribute float aDepth;
    varying vec4 vMirror;
    varying vec3 vWorld;
    varying float vDepth;
    void main(){
      vMirror = textureMatrix * vec4(position, 1.0);
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      vDepth = aDepth;
      gl_Position = projectionMatrix * viewMatrix * world;
    }`,
  fragmentShader: /* glsl */`
    ${lightUniforms}
    uniform sampler2D tDiffuse;
    uniform vec3 uSkyTop;
    uniform vec3 uHorizon;
    uniform vec3 uWater;
    uniform vec4 uDucks[${DUCKS}];
    varying vec4 vMirror;
    varying vec3 vWorld;
    varying float vDepth;
    ${noise}
    ${fog}
    // Rings spreading from points that appear at random, for raindrops.
    float rainRings(vec2 p){
      vec2 cell = floor(p);
      vec2 local = fract(p) - 0.5;
      float seed = hash21(cell);
      float t = fract(uTime * 0.9 + seed * 7.0);
      vec2 centre = (vec2(hash21(cell + 3.1), hash21(cell + 7.7)) - 0.5) * 0.6;
      float d = length(local - centre);
      return sin((d - t * 0.45) * 60.0) * smoothstep(0.45 * t + 0.04, 0.45 * t, d) * (1.0 - t);
    }
    void main(){
      vec2 p = vWorld.xz;
      float a = noise(p * vec2(0.18, 0.9) + vec2(uTime * 0.05, uTime * 0.22));
      float b = noise(p * vec2(0.5, 2.2) - vec2(uTime * 0.12, uTime * 0.35));
      vec2 ripple = vec2((a - 0.5) * 0.012 + (b - 0.5) * 0.006, (b - 0.5) * 0.02 + (a - 0.5) * 0.01);
      float distance = length(vWorld - cameraPosition);
      ripple *= mix(1.0, 0.25, smoothstep(10.0, 120.0, distance)) * (1.0 + uRain * 0.8);

      // Ducks: slow rings around each one, and a V of wake behind it when it swims.
      float wave = 0.0;
      for (int i = 0; i < ${DUCKS}; i++){
        vec4 duck = uDucks[i];
        if (duck.w < 0.5) continue;
        vec2 offset = p - duck.xy;
        float d = length(offset);
        wave += sin(d * 26.0 - uTime * 3.2) * exp(-d * 2.2) * (0.35 + duck.z * 2.0);
      }
      // Lapping lines where the water meets the bank.
      float shore = sin(vDepth * 55.0 - uTime * 1.6 + noise(p * 0.8) * 4.0) * smoothstep(0.35, 0.02, vDepth);
      float rings = 0.0;
      if (uRain > 0.01 && distance < 40.0) rings = (rainRings(p * 1.6) + rainRings(p * 1.6 + 13.7)) * uRain * smoothstep(40.0, 8.0, distance);
      ripple += vec2(wave * 0.004 + rings * 0.006, wave * 0.006 + shore * 0.003 + rings * 0.006);

      vec4 coord = vMirror;
      coord.xy += ripple * coord.w;
      vec3 mirror = texture2DProj(tDiffuse, coord).rgb;
      vec3 view = normalize(cameraPosition - vWorld);
      float fresnel = pow(1.0 - max(view.y, 0.0), 4.0);
      // Depth: clear, green-gold shallows over the bed near the bank; deep, darker water further out.
      float depth = smoothstep(0.02, 0.9, vDepth);
      vec3 shallow = mix(vec3(0.42, 0.44, 0.3), uWater * 1.25, 0.45) * (0.5 + uSunUp * 0.5);
      vec3 body = mix(shallow, uWater * 0.82, depth);
      float reflectivity = mix(0.3, 0.68, depth) + 0.28 * fresnel + uWet * 0.08;
      vec3 color = mix(body, mirror, clamp(reflectivity, 0.0, 0.96));
      color += (shore * 0.5 + 0.5) * smoothstep(0.12, 0.0, vDepth) * 0.06 * (uHemiSky * uHemiIntensity);
      vec3 normal = normalize(vec3((a - 0.5) * 0.3 + wave * 0.15 + rings * 0.3, 1.0, (b - 0.5) * 0.3 + rings * 0.3));
      float glint = pow(max(dot(reflect(-view, normal), normalize(uSunDir)), 0.0), 220.0);
      color += uSunColor * glint * uSunIntensity * 0.6 * uSunUp;
      gl_FragColor = vec4(applyFog(color, vWorld), 1.0);
    }`
}

// The sky dome: day colours, the sun and its glow, overcast when it rains, and at night the moon and
// twinkling stars.
export const skyMaterial = new ShaderMaterial({
  uniforms: world,
  side: BackSide,
  depthWrite: false,
  vertexShader: /* glsl */`
    varying vec3 vDirection;
    void main(){
      vDirection = normalize(position);
      vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = clip.xyww;
    }`,
  fragmentShader: /* glsl */`
    uniform vec3 uSkyTop;
    uniform vec3 uHorizon;
    uniform vec3 uSunDir;
    uniform vec3 uSunColor;
    uniform vec3 uMoonDir;
    uniform float uStars;
    uniform float uTime;
    uniform float uSunUp;
    uniform float uGloom;
    varying vec3 vDirection;
    ${noise}
    float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
    // One layer of stars: the sky is divided into cells, a share (density) of which hold a star at a
    // random point; returns how much of the star covers this direction.
    float starLayer(vec3 d, float scale, float density, float size, out float seed){
      vec3 id = floor(d * scale);
      seed = hash(id);
      if (seed < 1.0 - density) return 0.0;
      vec3 jitter = vec3(hash(id + 3.1), hash(id + 7.7), hash(id + 1.3)) - 0.5;
      vec3 centre = normalize(id + 0.5 + jitter * 0.5);
      return smoothstep(size, 0.0, length(d - centre) * scale);
    }
    void main(){
      vec3 d = normalize(vDirection);
      float h = clamp(d.y, -0.2, 1.0);
      vec3 color = mix(uHorizon, uSkyTop, pow(smoothstep(-0.02, 0.65, h), 0.75));
      float sun = max(dot(d, normalize(uSunDir)), 0.0);
      float clearSky = 1.0 - uGloom * 0.85;
      color += uSunColor * (smoothstep(0.9986, 0.9991, sun) * 3.0 + pow(sun, 60.0) * 0.6 + pow(sun, 8.0) * 0.3 + pow(sun, 2.5) * 0.12) * uSunUp * clearSky;
      color = mix(color, uHorizon, smoothstep(0.18, 0.0, h) * 0.35);
      // Low, rolling rain cloud.
      vec2 q = d.xz / max(0.08, d.y + 0.12);
      float cloud = noise(q * 1.4 + vec2(uTime * 0.02, 0.0)) * 0.6 + noise(q * 3.7 - vec2(uTime * 0.03, 0.0)) * 0.4;
      color = mix(color, mix(uHorizon, uSkyTop, 0.5) * (0.82 + cloud * 0.3), uGloom * smoothstep(-0.05, 0.25, h));
      float moon = max(dot(d, uMoonDir), 0.0);
      color += vec3(0.95, 0.96, 1.0) * smoothstep(0.99935, 0.9996, moon) * uStars * 1.4 * clearSky;
      color += vec3(0.45, 0.55, 0.9) * pow(moon, 60.0) * 0.3 * uStars;
      // A sky full of stars: many faint ones, fewer brighter ones and a few bright, tinted ones, all
      // twinkling, thicker along the faint band of the Milky Way.
      float night = uStars * clearSky * smoothstep(0.0, 0.22, h);
      if (night > 0.001){
        float band = exp(-pow(dot(d, normalize(vec3(0.42, 0.5, -0.76))) / 0.2, 2.0));
        float dust = noise(vec2(atan(d.z, d.x) * 5.0, d.y * 9.0)) * 0.6 + noise(vec2(atan(d.z, d.x) * 13.0, d.y * 21.0)) * 0.4;
        color += vec3(0.55, 0.6, 0.85) * band * dust * 0.16 * night;
        float seed;
        float faint = starLayer(d, 560.0, 0.035 + band * 0.07, 0.5, seed);
        color += vec3(0.85, 0.9, 1.0) * faint * (0.3 + 0.5 * fract(seed * 91.0)) * (0.7 + 0.3 * sin(uTime * 2.3 + seed * 60.0)) * night;
        float medium = starLayer(d, 260.0, 0.02 + band * 0.02, 0.42, seed);
        color += vec3(1.0, 0.97, 0.92) * medium * (0.7 + 0.6 * fract(seed * 53.0)) * (0.65 + 0.35 * sin(uTime * 1.7 + seed * 80.0)) * night;
        float bright = starLayer(d, 110.0, 0.012, 0.32, seed);
        vec3 tint = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.85, 0.7), fract(seed * 17.0));
        color += tint * bright * 1.8 * (0.7 + 0.3 * sin(uTime * 1.3 + seed * 40.0)) * night;
      }
      gl_FragColor = vec4(color, 1.0);
    }`
})

// Floating light: dust in the sunlight by day, fireflies by night. Points never come close enough to
// the camera to blur into large discs.
export function glowPointsMaterial(color: string, size: number, blink: boolean){
  return new ShaderMaterial({
    uniforms: { uTime: world.uTime, uColor: { value: new Color(color) }, uOpacity: { value: 0 }, uSize: { value: size }, uPixelRatio: { value: 1 } },
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    vertexShader: /* glsl */`
      uniform float uTime;
      uniform float uSize;
      uniform float uPixelRatio;
      attribute float aSeed;
      varying float vAlpha;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * 0.25 + aSeed * 11.0) * 0.35;
        p.y += sin(uTime * 0.33 + aSeed * 7.0) * 0.22;
        p.z += cos(uTime * 0.21 + aSeed * 5.0) * 0.35;
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = min(uSize * uPixelRatio * 60.0 / -view.z, 9.0 * uPixelRatio);
        float near = smoothstep(0.8, 2.0, -view.z);
        ${blink
          ? 'vAlpha = near * smoothstep(0.35, 1.0, sin(uTime * 1.1 + aSeed * 23.0) * 0.5 + 0.5);'
          : 'vAlpha = near * (0.45 + 0.55 * sin(uTime * 0.7 + aSeed * 31.0));'}
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d) * vAlpha * uOpacity;
        gl_FragColor = vec4(uColor * a, a);
      }`
  })
}

// Rain: streaks falling around the viewer, slanted by the wind, wrapping round a box that follows the
// camera so it never runs out.
export function rainMaterial(){
  return new ShaderMaterial({
    uniforms: { uTime: world.uTime, uRain: world.uRain, uCentre: { value: new Vector3() }, uColour: { value: new Color('#d8e2ea') } },
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    vertexShader: /* glsl */`
      uniform float uTime;
      uniform vec3 uCentre;
      attribute float aSeed;
      attribute float aEnd;
      varying float vAlpha;
      void main(){
        vec3 box = vec3(26.0, 12.0, 26.0);
        vec3 p = position;
        p.y -= uTime * (9.0 + aSeed * 3.0);
        p = mod(p - uCentre + box * 0.5, box) - box * 0.5 + uCentre;
        p += vec3(0.08, 0.5, 0.03) * aEnd;
        vec4 view = viewMatrix * vec4(p, 1.0);
        vAlpha = smoothstep(0.6, 3.0, -view.z) * (0.3 + aSeed * 0.35);
        gl_Position = projectionMatrix * view;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColour;
      uniform float uRain;
      varying float vAlpha;
      void main(){ gl_FragColor = vec4(uColour, vAlpha * uRain * 0.55); }`
  })
}

// The final, painterly finish: each mood's own gentle grade (no fixed tint), a little extra colour,
// faint paper grain, and shafts of light falling from the sun through the haze when it is on screen.
export const paintedGradeShader = {
  name: 'PaintedGradeShader',
  uniforms: {
    tDiffuse: { value: null },
    uShadowTint: { value: new Color(0, 0, 0) },
    uHighlightTint: { value: new Color(0, 0, 0) },
    uSaturation: { value: 1 },
    uSun: { value: new Vector2(0.5, 0.5) },
    uRays: { value: 0 },
    uRayColour: { value: new Color(1, 1, 1) },
    uAspect: { value: 1 }
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform vec3 uShadowTint;
    uniform vec3 uHighlightTint;
    uniform float uSaturation;
    uniform vec2 uSun;
    uniform float uRays;
    uniform vec3 uRayColour;
    uniform float uAspect;
    varying vec2 vUv;
    ${noise}
    void main(){
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      if (uRays > 0.01){
        // Light scattered towards the viewer from bright sky behind leaves, posts and the roof.
        vec2 step = (vUv - uSun) / 28.0;
        vec2 coord = vUv;
        float weight = 1.0, shafts = 0.0;
        for (int i = 0; i < 28; i++){
          coord -= step;
          vec3 s = texture2D(tDiffuse, coord).rgb;
          shafts += smoothstep(0.78, 1.0, dot(s, vec3(0.333))) * weight;
          weight *= 0.95;
        }
        vec2 toSun = (vUv - uSun) * vec2(uAspect, 1.0);
        color += uRayColour * shafts / 28.0 * uRays * 0.55 * smoothstep(1.2, 0.0, length(toSun));
      }
      float luma = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(luma), color, uSaturation);
      color += mix(uShadowTint, uHighlightTint, smoothstep(0.1, 0.8, luma));
      float grain = noise(vUv * vec2(900.0, 560.0)) * 0.6 + noise(vUv * 180.0) * 0.4;
      color *= 0.982 + grain * 0.036;
      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }`
}
