# Character Legacy Shader

> 角色遗产着色器，一款为适配7.0画质更新前装备而产生的着色器。
> 
> 由于7.0的画质升级，本着色器已经不推荐使用。

## 介绍

`Character Legacy Shader` 是 Final Fantasy XIV 在 Dawntrail（7.0）之前长期使用的角色渲染系统。

该 Shader 系统负责处理游戏中绝大多数角色相关材质，包括：

- Character Body
- Face
- Hair
- Eye
- Equipment Character Material

Legacy Character Shader 主要服务于 1.0 重制后的 ARR ～ Endwalker（2.0 - 6.x）时代角色渲染。

虽然 Dawntrail 引入了新的 Character Shader Pipeline，但大量旧模型、装备以及 Mod 资源仍然基于 Legacy Shader 工作。

---

## Rendering Pipeline 渲染流水线

Legacy Character Shader 的基础渲染流程：

```
            Mesh Data 网格数据
                    |
                    v
         Vertex Shader 顶点着色器
                    |
                    v
        +----------------------+
        | Texture Sampling     |
        |                      |
        | Base Color           |
        | Normal Map           |
        | Multi Map            |
        +----------------------+
                    |
                    v
        Material Parameters 材质计算
                    |
                    v
        Lighting Calculation 光照计算
                    |
                    v
            Pixel Shader 像素渲染
                    |
                    v
            Final Output 最终输出
```

主要阶段：

| 阶段 | 作用 |
| --- | --- |
| Vertex Shader | 处理顶点位置、骨骼动画、UV |
| Texture Sampling | 读取角色纹理数据 |
| Material Parameter | 控制材质属性 |
| Lighting | 计算光照与反射 |
| Pixel Shader | 输出最终颜色 |

- Vertex Shader = 决定模型如何存在于世界中
- Lighting Calculation = 决定光如何作用于模型
- Pixel Shader = 决定最终每个像素显示什么

---

## Material Structure 材质结构

Legacy Character Shader 使用 `.mtrl` 文件定义材质。

Material 文件主要包含：

```
.mtrl
 |
 +-- Shader Package
 |
 +-- Texture References
 |
 +-- Sampler Settings
 |
 +-- Material Constants
```

其中：

### Shader Package 着色器包（.shpk文件）

定义当前材质使用的 Shader。

例如：

- Character——最常见使用的着色器
- Hair——头发、睫毛、衣物毛发等使用的着色器
- Skin——皮肤、面部
- Iris——眼睛着色器

不同 Shader Package 会决定：

- 可使用的 Texture
- Constant 参数
- 渲染方式

---

## Texture References 纹理引用

通常，`.mtrl` 中保存的是纹理路径和材质常量。

常见：

```
.tex
.dds
```

例如：

```
chara/equipment/e0834/texture/

```
等一系列材质路径。

---

## Material Constants 材质常量

材质常量用于控制着色器（shader）参数。

包括：

- Specular 强度
- Roughness
- Emissive
- Color Adjustment

---

# Texture Inputs

Legacy Character Shader 主要依赖以下纹理。

---


---

## Normal Map 法线/法向贴图

Normal Map 主要用于在低模上模拟高模的表面细节。

FFXIV 使用：

```
Tangent Space Normal 切线空间法线
```

通常：

R通道:X Component 
```
x方向数据，通常表现为从左往右或从右往左看的效果。
```

G通道:
Y Component 
```
Y方向数据，通常表现为从上往下或从下往上看的效果。
```

B通道 B Channel:
本通道的使用效果非常多变，具体取决于 Shader 实现。

B通道的使用效果可以考虑查找材质表。

在渲染阶段，Shader 会将纹理数据转换为完整 Normal Vector。

---

# Multi Map

Multi Map 是 Legacy Character Shader 中非常重要的纹理。

通常储存：

- Specular
- Roughness
- Material Mask
- Dye Information

常见结构：

```
RGBA

R : Specular
G : Roughness
B : Material Information
A : Mask
```

不同材质类型可能存在差异。

---

# Character Parts

## Face Shader

Face Shader 负责角色面部渲染。

包括：

- Face Texture
- Eye
- Eyebrow
- Eyelash
- Lip

常见文件：

```
face_base.tex
face_normal.tex
face_mask.tex
```

Face Shader 通常需要处理：

- 皮肤光照
- 面部细节
- 透明区域

---

# Body Shader

Body Shader 用于角色身体。

负责：

- Skin Color
- Skin Normal
- Body Mask

常见：

```
body_base.tex
body_normal.tex
body_multi.tex
```

影响：

- 肌肉表现
- 皮肤粗糙度
- 高光强度

---

# Hair Shader

Hair Shader 是 Legacy Character Shader 中较特殊的部分。

主要处理：

- 发色
- Alpha Transparency
- Hair Highlight

常见纹理：

```
hair_base.tex
hair_normal.tex
hair_mask.tex
```

---

## Hair Alpha

头发通常使用 Alpha 控制透明区域。

例如：

```
Alpha = 1

完全显示


Alpha = 0

完全透明
```

因此头发 Mod 制作通常需要处理：

- Alpha Mask
- Normal Direction
- Highlight

---

# Eye Shader

Eye Shader 负责眼睛材质。

常见纹理：

```
eye_base.tex
```

主要控制：

- Iris
- Pupil
- Highlight

眼睛通常结合：

- Base Texture
- Mask
- Emissive

实现特殊效果。

---

# Lighting Model

Legacy Character Shader 使用传统角色光照模型。

主要包含：

## Diffuse

基础漫反射。

决定：

- 基础颜色
- 光照响应

---

## Specular

控制高光。

影响：

- 皮肤湿润感
- 头发亮度
- 金属反射

---

## Roughness

控制表面粗糙程度。

低 Roughness：

```
Sharp Highlight
```

高 Roughness：

```
Soft Reflection
```

---

## Emissive

自发光。

用于：

- 眼睛
- 特殊装备
- 魔法效果

---

# Dye System

FFXIV 染色系统依赖：

- Multi Map
- Color Set
- Material Parameter

基本流程：

```
Texture
   |
   v
Mask
   |
   v
Dye Color
   |
   v
Final Material
```

Mask 决定哪些区域可以被染色。

---

# Legacy Shader Modding

Legacy Character Shader 仍然是目前 FFXIV Mod 制作的重要基础。

常见修改：

## Texture Replacement

替换：

- Face Texture
- Body Texture
- Eye Texture
- Hair Texture

---

## Normal Editing

修改：

- Skin Detail
- Hair Direction
- Surface Detail

---

## Material Editing

修改：

- Specular
- Roughness
- Transparency
- Emissive

工具：

- TexTools
- Penumbra
- Photoshop
- Materialize
- Blender

---

# Legacy vs Dawntrail Character Shader

| 项目 | Legacy Character Shader | Dawntrail Character Shader |
| --- | --- | --- |
| 使用版本 | ARR - Endwalker | Dawntrail |
| 光照模型 | 传统模型 | 更新模型 |
| Skin Rendering | 基础皮肤表现 | 改进皮肤表现 |
| Hair | Alpha Hair | 更复杂发丝处理 |
| Material | 简单参数 | 更多控制参数 |
| Mod 兼容 | 大量旧资源 | 新资源 |

---

# Known Limitations

Legacy Character Shader 存在一些限制：

- 皮肤真实感有限
- 头发透明排序问题
- 光照表现较旧
- 部分材质依赖固定参数

因此 Dawntrail Shader 对角色渲染进行了重新设计。

---

# References

- XIV Modding Wiki
- TexTools Documentation
- Penumbra Documentation
- FFXIV Shader Research Community