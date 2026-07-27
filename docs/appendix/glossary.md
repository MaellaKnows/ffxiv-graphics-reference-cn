# 术语表

> FFXIV Graphics Reference CN Terminology Glossary

本章节收录 FFXIV 图形渲染、Shader、Material、Texture 与 Mod 制作相关术语。

---

# Graphics Basics（图形基础）

## Rendering Pipeline

**渲染管线 / 渲染流程**

指从模型数据输入到最终图像输出的一系列 GPU 处理流程。

FFXIV 的渲染流程可以简化为：

| Stage | English | 中文 | Description |
|---|---|---|---|
| 1 | Mesh | 模型数据 | 提供 Vertex、UV、Normal 等基础信息 |
| 2 | Vertex Shader | 顶点着色器 | 处理顶点位置、骨骼动画、UV转换 |
| 3 | Texture Sampling | 纹理采样 | 读取 Texture 数据，如 Color、Normal、Mask |
| 4 | Lighting Calculation | 光照计算 | 根据光源、法线、材质计算表面效果 |
| 5 | Pixel Shader | 像素着色器 | 输出最终像素颜色 |
| 6 | Final Output | 最终输出 | 显示到屏幕上的最终图像 |

---

## Vertex Shader

**顶点着色器**

负责处理模型顶点数据的 GPU 程序。

主要功能：

- 顶点位置转换
- 骨骼动画计算
- UV 坐标传递
- 法线转换

---

## Pixel Shader

**像素着色器**

负责计算最终像素颜色的 GPU 程序。

主要处理：

- 纹理采样
- 光照计算
- 材质参数
- 透明效果

---

## Lighting Calculation

**光照计算**

根据光源、法线、材质参数以及观察方向计算最终表面颜色。

影响：

- 明暗
- 高光
- 阴影
- 反射效果

---

# Shader（着色器）

## Shader

**着色器**

运行于 GPU 上，用于生成图像效果的小程序。

FFXIV 常见 Shader：

- Character Shader（角色着色器）
- Hair Shader（头发着色器）
- Skin Shader（皮肤着色器）
- Weapon Shader（武器着色器）

---

## Shader Package

**着色器包**

用于组织一组 Shader 程序的数据结构。

FFXIV 中通常对应：
```
.shpk
```

包含：

- Vertex Shader（顶点着色器）
- Pixel Shader（像素着色器）
- Shader Parameter（着色器参数）

---

## Shader Package File (.shpk)

**Shader 包文件**

FFXIV 使用的 Shader 文件格式。

用于定义：

- Shader Program（着色器程序）
- Texture Slot（纹理槽）
- Constant Buffer（常量缓冲区）

---

# Material（材质）

## Material

**材质**

在 FFXIV 中，`.mtrl` 文件负责连接模型、Shader 与 Texture。

Material 不储存模型或纹理本身，而是作为渲染资源之间的连接层。

| Resource | File Format | Description |
|---|---|---|
| Model | `.mdl` | 保存模型几何数据，包括 Mesh、Vertex、UV 等 |
| Material | `.mtrl` | 定义模型使用的材质参数与资源引用 |
| Shader Package | `.shpk` | 定义 GPU 渲染逻辑，包括 Vertex Shader 与 Pixel Shader |
| Texture | `.tex` | 提供颜色、法线、Mask 等纹理数据 |
| Color Set | `.tex` / Data | 用于装备染色与颜色控制 |
| Sampler | Material Data | 定义 Texture 的采样方式 |



---

## Material File (.mtrl)

**材质文件**

FFXIV 材质资源文件。

包含：

- Shader Reference（着色器引用）
- Texture Reference（纹理引用）
- Sampler（采样器）
- Constant（常量参数）
- Color Set（颜色集）

---

## Material Constant

**材质常量**

储存在材质中的数值参数。

例如：

- Specular（高光）
- Roughness（粗糙度）
- Emissive（自发光）

---

## Shader Key

**着色器键值**

用于控制 Shader 功能和变体的参数。

用于决定：

- Shader Variant（着色器变体）
- Feature Enable（功能启用）
- Rendering Path（渲染路径）

---

# Texture（纹理）

## Texture

**纹理**

用于描述模型表面信息的图像数据。

FFXIV 常见格式：


.tex
.dds


---

## Texture Reference

**纹理引用**

材质中记录的纹理路径和连接信息。

`.mtrl` 不保存纹理本身，而是引用外部 `.tex` 文件。

---

## Base Color Texture

**基础颜色纹理**

储存物体主要颜色信息。

也称：

- Diffuse Texture（漫反射纹理）
- Albedo Texture（反照率纹理）

---

## Normal Map

**法线贴图**

用于模拟表面细节方向变化。

作用：

- 增加表面细节
- 影响光照计算
- 模拟凹凸效果

---

## Tangent Space Normal Map

**切线空间法线贴图**

使用模型切线空间记录表面方向信息的法线贴图。

---

## Mask Texture

**遮罩纹理**

通过颜色通道控制不同区域效果的纹理。

例如：

- 染色区域
- 透明区域
- 材质区域

---

## Multi Map

**多功能纹理**

FFXIV 中常见的复合数据纹理。

通常储存：

- Specular（高光）
- Roughness（粗糙度）
- Mask（遮罩）

---

## Color Set

**颜色集**

FFXIV 特有的颜色控制系统。

用于：

- 装备染色
- 区域颜色变化

---

# Texture Channel（纹理通道）

## Channel

**通道**

纹理中的独立数据层。

包括：

| 英文 | 中文 |
|-|-|
| Red Channel (R) | 红色通道 |
| Green Channel (G) | 绿色通道 |
| Blue Channel (B) | 蓝色通道 |
| Alpha Channel (A) | Alpha 通道 |

---

## RGBA

**颜色通道组合**

由：

- Red（红）
- Green（绿）
- Blue（蓝）
- Alpha（透明度）

组成。

---

# Rendering（渲染）

## Specular

**高光**

描述光线在表面的反射强度。

---

## Roughness

**粗糙度**

控制表面反射扩散程度。

数值越低：

- 表面越光滑
- 高光越集中

---

## Emissive

**自发光**

不依赖外部光源产生的亮度。

常用于：

- 魔法效果
- 发光武器
- 眼睛效果

---

## Ambient Occlusion (AO)

**环境光遮蔽**

模拟物体接触区域产生的阴影。

---

## Opacity

**不透明度**

控制材质透明程度。

---

# Modding（Mod 制作）

## Mod

**修改文件 / 模组**

通过修改游戏资源改变视觉表现。

由于社区相对成熟，一般我们使用XMA的筛选分类来进行mod的分类。

例如：Gear，Face，Mount等。

---

## Penumbra / pen

**FFXIV Mod 管理框架**

用于：

- Mod 加载
- 优先级管理
- 资源替换

---

## TexTools / tt

**FFXIV 资源编辑工具**

用于：

- 解包
- 查看资源
- 编辑纹理

---

## Dalamud / 卫月 / 月

**FFXIV 插件框架**

用于加载第三方插件。

---

# File Formats（文件格式）

| 英文 | 中文 | 说明 |
|-|-|-|
| Model (.mdl) | 模型文件 | 保存模型数据 |
| Material (.mtrl) | 材质文件 | 保存材质信息 |
| Texture (.tex) | 纹理文件 | FFXIV 专用纹理格式 |
| DDS | DirectDraw Surface | 常见 GPU 纹理格式 |
| Animation (.pap) | 动画文件 | 保存动画数据 |
| VFX (.avfx) | 特效文件 | 保存视觉效果 |
| Skeleton (.sklb) | 骨骼文件 | 保存骨骼结构 |

---

# References（参考资料）

- XIV Modding Wiki
- TexTools Documentation（TexTools 文档）
- Penumbra Documentation（Penumbra 文档）
- FFXIV Shader Research Community（FFXIV Shader 研究社区）