# 安装环境

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

## Overview

这一页列出做 FFXIV Mod 需要装的东西，以及每个工具「装来干什么」。

不需要全部装。按你要做的事情选：

| 目标 | 至少需要 |
|---|---|
| 只换贴图 | TexTools + Penumbra |
| 改模型 | 上面 + Blender |
| 改材质/染色 | 上面 + TexTools Material Editor |
| 改特效 | 上面 + VFXEditor |

## 必备：游戏本体

Final Fantasy XIV（国际服或国服客户端）。

!!! note "版本对齐"
    Mod 工具通常跟随国际服版本更新。国服版本落后时，部分新结构（如 Dawntrail 材质）可能无法正确解析。

---

## Mod 管理环境

### XIVLauncher

第三方启动器，是 Dalamud 与 Penumbra 的运行前提。

用途：

- 启动游戏
- 加载 Dalamud 插件框架

### Dalamud

中文社区常称「卫月」，是 FFXIV 插件与 Mod 生态的核心框架。

它提供：

- 插件加载与更新
- 与游戏数据交互的 API
- 插件之间的隔离与共存

可以把它理解成「插件操作系统」，Penumbra 等插件运行在它之上。

!!! warning "安全边界"
    Dalamud 通过受控接口影响游戏，而不是直接改游戏文件。请只从官方渠道安装，不要使用来路不明的注入工具。

### Penumbra

用途：在运行时替换游戏资源，不修改原始游戏文件。

特点：

- 可随时开关
- 多个 mod 可叠加
- 出问题能一键回滚

Mod 文件夹位置可自行设置，建议单独放在一个容易备份的目录。

---

## 制作软件

### Blender

推荐版本：

| 版本 | 说明 |
|---|---|
| Blender 4.2 LTS / 4.5 LTS | 长期支持，插件生态稳定 🟡 |
| 较新的 4.x | 功能新，插件可能需要更新 |
| 2.7x / 2.8x | 仅在处理老工具链或老格式时需要 |

用途：

- 模型修改
- UV 编辑
- 法线处理
- 骨骼与权重调整

链接：

- [Blender 官网](https://www.blender.org/download)
- [Blender 扩展平台](https://extensions.blender.org/)

### Photoshop / GIMP

用途：贴图编辑。

需要支持：

- DDS 读写
- RGBA 通道
- Mask 与 Normal 处理

### Substance 3D Painter（可选）

用于：

- PBR 贴图制作
- 法线烘焙
- 材质细节绘制

---

## FF14 专用工具

### TexTools

用途：

- 解包游戏资源
- 预览模型与材质
- 导入导出贴图
- 编辑 Material
- 打包 modpack

对 Mod 作者来说，TexTools 是资源管理 + 材质编辑 + 打包的一站式工具。详细用法见 [TexTools](../workflows/textools.md)。

### VFXEditor

用途：

- 修改技能特效
- 修改武器光效
- 调整粒子

---

## 推荐插件

| 插件 | 作用 | 说明 |
|---|---|---|
| Penumbra | 资源替换 | 必备 |
| Glamourer | 外观幻化 | 测试染色与外观 |
| Ktisis / Anamnesis | 姿态与截图 | 展示成品 |
| FFXIV Blender 相关导入导出插件 | 模型导入导出 | 名称与安装方式以社区文档为准 🟡 |

!!! tip "装完先验证"
    打开游戏 → Dalamud 插件列表里能看到 Penumbra → 随便装一个已知可用的 mod → 确认生效。三步都通过再开始制作。

## 常见问题

| 症状 | 可能原因 | 处理 |
|---|---|---|
| 游戏启动失败 | 启动器与游戏版本不匹配 | 更新 XIVLauncher |
| Penumbra 不显示 | Dalamud 未加载或插件禁用 | 检查插件列表 |
| 导入的贴图模糊 | 未生成 mipmap 或尺寸不对 | 按 2 的幂次尺寸导出 |
| 工具报错无法读取 `.tex` | TexTools 版本过旧 | 更新到最新版 |

## 相关页面

- [FF14 的文件结构](folder-structure.md)
- [Workflow（工作流）概览](../workflows/index.md)
- [故障排除](../workflows/troubleshooting.md)

## References

- XIVLauncher — https://github.com/goatcorp/FFXIVQuickLauncher
- Dalamud — https://github.com/goatcorp/Dalamud
- Penumbra — https://github.com/xivdev/Penumbra
- TexTools — https://github.com/TexTools/FFXIV_TexTools_UI
- Blender — https://www.blender.org/
- XIV Modding Wiki — https://xivmodding.com/
