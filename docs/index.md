# FFXIV Graphics Reference CN

> Chinese Documentation for FFXIV Graphics, Shaders, Materials & Modding

欢迎来到 **FFXIV Graphics Reference CN（GRC）**。

这是一个专注于 **Final Fantasy XIV 图形渲染、Shader、Material 与 Mod 制作** 的中文参考文档。

[:material-book-open-page-variant: 开始阅读](getting-started/index.md){ .md-button .md-button--primary }
[:material-github: GitHub](https://github.com/MaellaKnows/ffxiv-graphics-reference-cn){ .md-button }

---

## 分类导航

<div class="grid cards" markdown>

- :material-school:

    ### 入门

    环境配置、工具安装、目录结构、术语规范。

    [:material-arrow-right: 开始阅读](getting-started/index.md)

- :material-palette:

    ### Shader 着色器

    Character、Face、Hair、Skin、Eye、Glass 等 Shader 文档。

    [:material-arrow-right: 查看文档](shaders/index.md)

- :material-layers:

    ### Material 材质

    `.mtrl` 文件结构、Shader Keys、Constants、Sampler。

    [:material-arrow-right: 查看材质](materials/index.md)

- :material-image-multiple:

    ### Texture 贴图

    Base Color、Normal、Mask、Multi、ColorSet、Eye Texture。

    [:material-arrow-right: 查看贴图](textures/index.md)

- :material-hammer-wrench:

    ### Workflow 工作流

    Blender、TexTools、Penumbra 与故障排除。

    [:material-arrow-right: 查看工作流](workflows/index.md)

- :material-package-variant:

    ### Mod 制作

    从零开始的制作路径、工具链、教程地图与资源。

    [:material-arrow-right: 查看 Mod 章节](modding/main.md)

- :material-bookshelf:

    ### 附录

    术语表、着色器参考表、更新日志、参考资料。

    [:material-arrow-right: 查看附录](appendix/index.md)

</div>

---

## 推荐阅读

如果你是第一次接触 FF14 Mod，建议按下面的顺序建立整体认知：

1. [FF14 的文件结构](getting-started/folder-structure.md) —— 先知道文件放在哪
2. [Shader Reference](shaders/shader-reference.md) —— 理解 Shader 在渲染流程里的位置
3. [Character Shader](shaders/character-shaders.md) —— 最常用的一类 Shader
4. [MTRL 格式](materials/mtrl-format.md) —— 材质文件里到底有什么
5. [Normal Map](textures/normal-map.md) 与 [Mask Map](textures/mask-map.md) —— 最常改的两张图
6. [Penumbra](workflows/penumbra.md) —— 把改动安全地装进游戏

---

## 常用网站

[:material-web: XIV Modding Wiki](https://xivmodding.com/){ .md-button }
[:fontawesome-brands-github: TexTools](https://github.com/TexTools/FFXIV_TexTools_UI){ .md-button }

[:material-cube-outline: Blender](https://www.blender.org/){ .md-button }
[:material-earth: XIV Mod Archive](https://www.xivmodarchive.com/){ .md-button }

---

## 常用文件格式

| 格式 | 说明 |
|------|------|
| `.mdl` | 模型文件 |
| `.mtrl` | 材质文件 |
| `.tex` | FFXIV 纹理 |
| `.dds` | DirectDraw Surface（编辑中间格式） |
| `.pap` | 动画文件 |
| `.avfx` | 特效文件 |
| `.sklb` | 骨骼 |
| `.eid` | 装备定义 |
| `.atex` | 图集/ColorSet 贴图 |

---

## 项目目标

GRC 致力于建立一套完整、持续更新的中文 FFXIV 图形参考文档，包括但不限于：

- Shader Reference
- Material Documentation
- Texture Documentation
- Rendering Pipeline
- Modding Workflow
- Reverse Engineering Notes
- Community Research

欢迎共同完善这份文档，编写前请阅读 [术语与写作规范](getting-started/glossary.md)。

---

## 资料来源

本项目参考并整理了以下社区公开资源：

- XIV Modding Wiki
- TexTools
- Penumbra
- XIVLauncher / Dalamud
- Blender Documentation
- Microsoft DirectX Documentation

以及大量社区研究成果。具体条目见 [参考资料](appendix/references.md)。

---

## 联系作者

如果发现文档存在错误，或希望补充内容，欢迎提交 Issue 或联系作者。

📧 **akiyamaasumi@outlook.com**

💬 **Discord：页面右下角加入服务器**

⭐ 如果本项目对你有所帮助，欢迎支持与分享。

---

## References

- XIV Modding Wiki — https://xivmodding.com/
- TexTools — https://github.com/TexTools/FFXIV_TexTools_UI
- Penumbra — https://github.com/xivdev/Penumbra
- XIVLauncher — https://github.com/goatcorp/FFXIVQuickLauncher
- MkDocs Material — https://squidfunk.github.io/mkdocs-material/
