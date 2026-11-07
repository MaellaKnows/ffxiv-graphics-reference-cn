# Mod 制作基础

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

> 这一页回答一个问题：想做 FF14 Mod，我需要学什么？

FF14 的 Mod 本质上是**替换游戏会读取的文件**。可替换的对象包括模型（`.mdl`）、材质（`.mtrl`）、贴图（`.tex` / `.dds`），以及动画与特效。

运行时由 Penumbra（模组加载器）接管文件重定向 ✅ Verified。你最终交付的东西是一个 `Penumbra mod（.pmp）`，里面放的是「游戏内路径 + 替换文件」。

!!! note "本站的定位"

    本站讲的是**文件本身**：`.mtrl` 有哪些字段、Mask Map 的蓝色通道代表什么、Shader 怎么选。
    具体按钮怎么点，请看社区教程，见 [Mod 制作教程](modding-tutorials.md)。

---

## 需要学什么

把 Mod 制作拆成五个能力维度。它们不是严格线性的顺序，但建议按下面的优先级学。

### 资源结构

知道一件装备由哪些文件组成：模型、材质、Diffuse、Normal、Mask、Color Set 分别在哪。

知道它们是按「游戏内路径」组织的，例如 `chara/equipment/e####/...`。路径随装备 ID 变化，不要背死。

参考：[FF14 的文件结构](../getting-started/folder-structure.md)。

### 贴图编辑

会导出 `.tex`、编辑、再转回去。核心不是软件操作，而是**通道语义**。

同一张 Mask Map，红色可能是高光、绿色可能是粗糙度、蓝色可能是 AO，含义随 Shader 变化。🟡 Researching

参考：[Base Color](../textures/base-color.md)、[Normal Map](../textures/normal-map.md)、[Mask Map](../textures/mask-map.md)。

### 模型编辑

会导入导出 `.mdl`，会处理 UV、法线、顶点色、骨骼绑定与权重。

模型是门槛最高的一环。大多数人的第一个 Mod 不应该从这里开始。

参考：[Blender 工作流](../workflows/blender.md)。

### 材质参数

会读 `.mtrl` 的结构：Shader 包、Shader Key、Material Constant、Sampler、Texture Slot。

改材质往往比改模型便宜得多：换一个 Shader Key，或者调一个 Constant，就能得到全新的观感。

参考：[`.mtrl` 格式](../materials/mtrl-format.md)、[Constants](../materials/constants.md)、[Shader Keys](../materials/shader-keys.md)。

### 打包发布

会把改好的文件按路径放进 Penumbra 的 mod 目录，会导出 `.pmp`，会写清依赖与适用范围。

一个能跑起来的 Mod 和一个能给别人用的 Mod，差别主要在这里。

参考：[Penumbra 工作流](../workflows/penumbra.md)。

---

## 技能 → 工具 → 章节

| 技能 | 用到的工具 | 对应本站章节 |
|---|---|---|
| 定位与提取资源 | TexTools | [TexTools 工作流](../workflows/textools.md) |
| 理解文件目录结构 | TexTools、文件管理器 | [文件结构](../getting-started/folder-structure.md) |
| 编辑 Base Color | Photoshop / GIMP、Substance 3D Painter | [Base Color](../textures/base-color.md) |
| 编辑 Normal Map | Photoshop / GIMP、Substance 3D Painter | [Normal Map](../textures/normal-map.md) |
| 编辑 Mask / Multi Map | Photoshop / GIMP（通道面板） | [Mask Map](../textures/mask-map.md)、[Multi Map](../textures/multi-map.md) |
| 调整染色表现 | TexTools、Color Set 编辑 | [Color Set](../textures/color-set.md) |
| 修改模型 / UV | Blender | [Blender 工作流](../workflows/blender.md) |
| 修改材质参数 | TexTools、文本 / 二进制编辑 | [`.mtrl` 格式](../materials/mtrl-format.md) |
| 选择 Shader | TexTools、Penumbra | [Shader Reference](../shaders/shader-reference.md) |
| 处理透明与半透明 | Penumbra、材质编辑 | [Character Transparency Shader](../shaders/character-transparency-shader.md) |
| 运行时加载与调试 | Penumbra、XIVLauncher | [Penumbra 工作流](../workflows/penumbra.md) |
| 排错 | Penumbra、TexTools | [常见问题](../workflows/troubleshooting.md) |

---

## 第一个 Mod 的最小路径

目标：把一件装备的 Base Color 换掉，打包，进游戏看到效果。**不碰模型，不碰材质。**

1. **选目标**。挑一件结构简单的装备（例如单件上衣或耳饰），记下它的装备 ID。
2. **导出贴图**。用 TexTools 找到该装备的 Diffuse（通常以 `_d` 结尾），导出为可编辑格式。
3. **备份原图**。原文件一定要留一份，否则改坏了没法对比。
4. **编辑贴图**。保持尺寸与通道含义不变，只改颜色内容。第一次不要动 Alpha。
5. **转回游戏格式**。按 TexTools 的要求转回 `.tex` / `.dds`，确认没有压缩错误。
6. **搭 mod 目录**。在 Penumbra 里新建 mod，按**游戏内路径**放置替换文件：

    ```
    <mod 目录>/
    └── chara/
        └── equipment/
            └── e####/
                └── texture/
                    └── <贴图文件>.tex
    ```

7. **启用并验证**。在 Penumbra 中启用该 mod，进入游戏，确认模型上出现新贴图。
8. **导出 `.pmp`**。确认无误后导出，这就是可以分享的成品。

!!! tip "先做减法"

    第一次改贴图时，只改一小块区域（比如一条边、一个扣子）。
    这样一旦游戏里没变化，你能立刻判断是「路径错了」还是「画错了」。

!!! warning "不要在第一次就改材质"

    改 `.mtrl` 会同时影响 Shader、Key、Constant 与 Sampler。
    先确认贴图链路是通的，再去动材质参数。

---

## 常见误区

| 现象 | 常见原因 | 处理方向 |
|---|---|---|
| 游戏内完全没变化 | 路径不对、mod 未启用、被其他 mod 覆盖 | 检查路径与加载顺序，见 [常见问题](../workflows/troubleshooting.md) |
| 贴图发灰 / 过亮 | 色彩空间或通道被改坏 | 对照 [Base Color](../textures/base-color.md) 检查 |
| 表面出现奇怪高光 | Mask Map 通道含义被改写 | 对照 [Mask Map](../textures/mask-map.md) |
| 模型出现破面 / 黑块 | Normal Map 或法线方向错误 | 对照 [Normal Map](../textures/normal-map.md) |
| 染色不生效 | Color Set 或 Shader Key 限制 | 对照 [Color Set](../textures/color-set.md)、[Shader Keys](../materials/shader-keys.md) |

---

## 接下来读什么

- 想知道用什么工具：[Mod 制作工具](modding-tools.md)
- 想知道按目标怎么走：[Mod 制作教程](modding-tutorials.md)
- 想知道素材和社区在哪：[Mod 制作资源](modding-resources.md)
- 名词不认识：[术语表](../appendix/glossary.md)

---

## References

- [XIV Modding Wiki](https://xivmodding.com/)
- [TexTools](https://github.com/TexTools/FFXIV_TexTools_UI)
- [Penumbra](https://github.com/xivdev/Penumbra)
- [XIVLauncher](https://github.com/goatcorp/FFXIVQuickLauncher)
- [Blender](https://www.blender.org/)
