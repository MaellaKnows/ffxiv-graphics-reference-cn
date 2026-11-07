# 术语与写作规范

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

## Overview

这一页规定本站**怎么写**，以及**术语怎么统一**。

完整的术语条目（按主题分类、带解释）在 [术语表](../appendix/glossary.md)。

!!! note "写作者先读这一页"
    新增或修改页面时，至少确认三件事：术语写法、状态标记、页面结构。

## 术语写法

原则：**保留英文，首次出现加中文括注**。

| 正确 | 错误 |
|---|---|
| Shader（着色器） | 着色器（Shader） |
| Material（材质） | 材质（Material） |
| Normal Map（法线贴图） | 法线纹理 |
| Mask Map（Mask 贴图） | 遮罩贴图 |
| Base Color（底色） | 漫反射贴图 |
| ColorSet | 颜色集 |
| Alpha | 透明度通道 |

以下术语全文保留英文，不翻译：

Shader、Material、Material Constant、Shader Key、Vertex Color、ColorSet、Sampler、Texture Slot、Normal Map、Mask Map、FlowMap、SphereMap、Index Map、UV、Mesh、LOD、Specular、Roughness、Ambient Occlusion（AO）、Emissive、Alpha、Draw Call、Pipeline。

## 状态标记

所有结论都要能看出可信度。

| 标记 | 含义 | 使用场景 |
|---|---|---|
| ✅ Verified（已验证） | 实际修改并在游戏内确认 | 可以当作事实写 |
| 🟡 Researching（研究中） | 有实验，结论仍在完善 | 写结论时加「目前」 |
| 🟠 Hypothesis（推测） | 社区常见说法，尚未验证 | 必须写明「推测」 |
| 🔴 Unknown（未知） | 没有可靠结论 | 不要用猜测填空 |

!!! warning "不要把推测写成事实"
    没有验证过的数值、槽位编号、常量名，一律标 🟡 或 🟠，或者干脆不写。

## 页面结构

Shader 页面必须包含以下小节（可以增加，不能删除）：

- Overview
- Shader File
- Supported Versions
- Official Usage
- Texture Slots
- Vertex Colors
- UV Channels
- Material Constants
- Shader Keys
- Additional Data
- Penumbra Mapping
- TexTools Mapping
- Modding Tips
- Known Issues
- References

其它类型的页面建议结构：

| 页面类型 | 建议小节 |
|---|---|
| 概念页 | Overview → 原理 → 表格 → 常见问题 → References |
| 工作流页 | Overview → 前置条件 → 步骤 → 验证 → 常见问题 → References |
| 参考页 | 表格优先，附字段说明与可信度 |

## 排版约定

| 项目 | 约定 |
|---|---|
| 段落 | 一段不超过 4 行 |
| 表格 | 对比、枚举、字段说明优先用表格 |
| 图 | 流程用 Mermaid，不用截图 |
| 提示 | `!!! note`、`!!! warning`、`!!! tip` |
| 链接 | 站内链接写相对路径 `.md` |
| 文件名 | 小写 kebab-case |

## 引用与来源

每个页面结尾都要有 `## References`，并给出可访问的真实链接：

- XIV Modding Wiki — https://xivmodding.com/
- TexTools — https://github.com/TexTools/FFXIV_TexTools_UI
- Penumbra — https://github.com/xivdev/Penumbra
- Blender — https://www.blender.org/

不要写「来源不明」「据说」。

## 实验内容

实验性结论需要写清：

1. 测试版本（如 7.x）
2. 测试方法（改了哪个文件、哪个字段）
3. 测试结果（截图或现象描述）
4. 是否可复现

## 相关页面

- [术语表](../appendix/glossary.md)
- [参考资料](../appendix/references.md)
- [更新日志](../appendix/changelog.md)

## References

- XIV Modding Wiki — https://xivmodding.com/
- MkDocs Material 文档 — https://squidfunk.github.io/mkdocs-material/
- PyMdown Extensions — https://facelessuser.github.io/pymdown-extensions/
