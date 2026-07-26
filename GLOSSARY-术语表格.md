# Glossary

> FFXIV Graphics Reference CN Terminology

本文档定义了 FFXIV Graphics Reference CN 使用的专业术语。

所有页面均应遵循本术语表，以保证整个项目术语统一。

---

# 使用原则

- 保留国际社区通用英文术语。
- 首次出现采用 **英文（中文）** 的形式。
- 后续可根据上下文直接使用英文。
- 避免同一术语出现多个中文译法。
- 对于没有统一译名的术语，优先采用 FF14 Mod 社区的习惯用法。

---

# Rendering

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Shader | Shader（着色器） | - | 不直接写“着色器” |
| Rendering Pipeline | 渲染管线 | - | |
| Draw Call | Draw Call（绘制调用） | - | 保留英文 |
| Render Pass | 渲染阶段 | - | |
| Rasterization | 光栅化 | - | |
| Vertex Shader | 顶点 Shader | VS | |
| Pixel Shader | 像素 Shader | PS | |
| Compute Shader | Compute Shader（计算着色器） | CS | |

---

# Material

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Material | Material（材质） | - | |
| Material Constant | Material Constant（材质常量） | - | 不翻译为“常量参数” |
| Material Flag | Material Flag（材质标志） | - | |
| Shader Key | Shader Key（着色器键） | - | |
| Sampler | Sampler（采样器） | - | |
| Additional Data | Additional Data（附加数据） | - | |

---

# Texture

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Texture | Texture（贴图） | - | |
| Texture Slot | Texture Slot（贴图槽） | - | |
| Base Color | Base Color（底色） | - | 推荐使用 |
| Diffuse | Diffuse（漫反射） | - | 理论术语，文档中优先使用 Base Color |
| Normal Map | Normal Map（法线贴图） | - | |
| Mask Map | Mask Map（Mask 贴图） | - | 不写“遮罩贴图” |
| FlowMap | FlowMap | - | 保持单词形式 |
| SphereMap | SphereMap | - | 保持单词形式 |
| CubeMap | CubeMap | - | |
| Index Map | Index Map（索引贴图） | - | |
| TileMap | TileMap | - | |

---

# Texture Channels

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Red Channel | 红色通道 | R | |
| Green Channel | 绿色通道 | G | |
| Blue Channel | 蓝色通道 | B | |
| Alpha Channel | Alpha 通道 | A | 不写 Alpha Layer |

---

# Surface Properties

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Specular | Specular（高光） | - | |
| Specular Power | 高光强度 | - | |
| Roughness | Roughness（粗糙度） | - | |
| Metallic | Metallic（金属度） | - | |
| Ambient Occlusion | Ambient Occlusion（环境光遮蔽） | AO | 后文统一使用 AO |
| Emissive | Emissive（自发光） | - | |
| Opacity | Alpha（透明度） | - | 推荐使用 Alpha |
| Transparency | Transparency（透明） | - | 与 Alpha 区分 |
| Refraction | Refraction（折射） | - | |
| Fresnel | Fresnel（菲涅耳） | - | |

---

# Mesh

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Mesh | Mesh（网格） | - | |
| Vertex | Vertex（顶点） | - | |
| Vertex Color | Vertex Color（顶点色） | VC | 首次出现不使用缩写 |
| Vertex Normal | 顶点法线 | - | |
| UV | UV | - | 不翻译 |
| UV Channel | UV 通道 | - | |
| Tangent | 切线 | - | |
| Bitangent | 副切线 | - | |
| LOD | Level of Detail（细节层级） | LOD | |

---

# Colorset

| English | 中文 | 缩写 | 备注 |
|----------|------|------|------|
| Colorset | Colorset | - | 不翻译 |
| Colorset Row | Colorset 行 | - | |
| Colorset Pair | Colorset Pair | - | |

---

# Shader Types

| English | 中文 |
|----------|------|
| Character Shader | Character Shader |
| Character Glass Shader | Character Glass Shader |
| Character Stocking Shader | Character Stocking Shader |
| Character Scroll Shader | Character Scroll Shader |
| Character Ink Shader | Character Ink Shader |
| Character Transparency Shader | Character Transparency Shader |
| Character Hair Shader | Character Hair Shader |
| Character Face Shader | Character Face Shader |
| Character Eye Shader | Character Eye Shader |
| Character Skin Shader | Character Skin Shader |
| Furniture Shader | Furniture Shader |
| Background Shader | Background Shader |
| Water Shader | Water Shader |
| Terrain Shader | Terrain Shader |
| VFX Shader | VFX Shader |

> Shader 类型名称保持英文，不进行翻译。

---

# File Formats

| Extension | 名称 |
|------------|------|
| .mdl | Model |
| .mtrl | Material |
| .tex | Texture |
| .atex | Colorset Texture |
| .shpk | Shader Package |
| .pap | Animation |
| .avfx | Visual Effect |

---

# Software

| English | 中文 |
|----------|------|
| Penumbra | Penumbra |
| TexTools | TexTools |
| Blender | Blender |
| Substance Painter | Substance Painter |
| Photoshop | Photoshop |
| Materialize | Materialize |

软件名称保持官方英文。

---

# Status

所有研究内容均使用以下状态：

| Status | 中文 | 含义 |
|--------|------|------|
| Verified | 已验证 | 已通过实验验证，可认为可靠。 |
| Researching | 研究中 | 已有实验，但结论仍在完善。 |
| Hypothesis | 推测 | 社区提出的合理假设，尚未验证。 |
| Unknown | 未知 | 当前没有可靠结论。 |

---

# Writing Conventions

推荐：

- Shader（着色器）
- Material（材质）
- Normal Map（法线贴图）
- Base Color（底色）
- Vertex Color（顶点色）

避免：

- 着色器（Shader）
- 法线纹理
- 面具贴图
- 漫反射贴图（在 Shader 页面中）

---

# Future Updates

随着 Dawntrail 及后续版本更新，本术语表将持续维护。

新增术语时，请遵循以下原则：

1. 优先采用国际社区通用名称。
2. 保留英文作为主索引。
3. 中文译名保持唯一。
4. 修改术语前，应检查全站引用，避免同义词混用。
