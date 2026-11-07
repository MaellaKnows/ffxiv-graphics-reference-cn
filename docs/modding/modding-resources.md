# Mod 制作资源

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

> Mod 到底从哪儿来？答案分两类：官方给的，和社区攒的。

FF14 的 Mod 生态几乎完全建立在社区文档与社区工具之上。官方不提供模组接口，也不提供资源格式说明。

本页把这些入口按类型整理出来，并标出哪些是官方资源、哪些是社区资源。

---

## 官方资源

官方资源只覆盖「引擎与工具的基础设施」，不覆盖 FF14 的文件格式。

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| FINAL FANTASY XIV 官方网站 | 官方站点 | [finalfantasyxiv.com](https://www.finalfantasyxiv.com/) | 版本信息、公告、素材使用条款入口 | ✅ Verified |
| Square Enix 支持站点 | 官方站点 | [support.na.square-enix.com](https://support.na.square-enix.com/) | 查找官方条款与政策 | 🟡 Researching |
| Microsoft DirectX 文档 | 官方文档 | [learn.microsoft.com](https://learn.microsoft.com/windows/win32/direct3d12/) | 理解 DDS、纹理格式、渲染管线 | ✅ Verified |
| Blender 官方文档 | 官方文档 | [docs.blender.org](https://docs.blender.org/) | 模型编辑、UV、法线、权重 | ✅ Verified |

!!! note "为什么官方资源这么少"

    FF14 的模型、材质、贴图格式都是内部格式，没有公开规范。
    站内所有关于 `.mdl` / `.mtrl` / `.tex` 的描述，来源都是社区逆向与实测。

---

## 社区资源

### 文档与 Wiki

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| XIV Modding Wiki | 文档站 | [xivmodding.com](https://xivmodding.com/) | 资源参考、Shader 参考表、Mod 流程 | ✅ Verified |
| xivmods.guide | 文档站 | [xivmods.guide](https://www.xivmods.guide/) | 入门向的 Mod 流程说明 | 🟡 Researching |
| 本站 Shader Reference | 文档 | [Shader Reference](../shaders/shader-reference.md) | 中文 Shader 索引 | 🟡 Researching |
| 本站着色器参考表 | 文档 | [着色器参考表](../appendix/materials-table.md) | Shader 与通道对照 | 🟡 Researching |

XIV Modding Wiki 是目前最完整的英文资料源，本站大量内容以它为参照。

### 工具仓库

工具层的两个核心是 TexTools（资源处理）与 Penumbra（模组加载器，负责运行时加载）。

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| TexTools | 工具仓库 | [FFXIV-TexTools/tools-update](https://github.com/TexTools/FFXIV_TexTools_UI) | 资源提取、导入、打包 | ✅ Verified |
| Penumbra | 工具仓库 | [xivdev/Penumbra](https://github.com/xivdev/Penumbra) | 运行时加载 `Penumbra mod（.pmp）` | ✅ Verified |
| XIVLauncher | 工具仓库 | [goatcorp/FFXIVQuickLauncher](https://github.com/goatcorp/FFXIVQuickLauncher) | 启动器与插件环境 | ✅ Verified |
| Dalamud | 工具仓库 | [goatcorp/Dalamud](https://github.com/goatcorp/Dalamud) | 插件框架 | 🟡 Researching |

工具的具体用途与学习成本见 [Mod 制作工具](modding-tools.md)。

### 模型与贴图素材

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| Poly Haven | 贴图 / HDRI 素材 | [polyhaven.com](https://polyhaven.com/) | 自定义贴图的素材来源 | ✅ Verified |
| ambientCG | 贴图素材 | [ambientcg.com](https://ambientcg.com/) | 可平铺贴图、材质参考 | ✅ Verified |
| Blender 官方示例文件 | 模型素材 | [blender.org](https://www.blender.org/) | 练习建模与 UV | 🟡 Researching |

!!! tip "素材优先自己产"

    外部素材可以省时间，但尺寸、通道、色彩空间都要重新适配。
    对 FF14 来说，「按目标通道重画一遍」往往比「找一张现成的」更快。

### 着色器与材质研究

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| XIV Modding Wiki · Shader Reference | 研究文档 | [xivmodding.com](https://xivmodding.com/) | 各 Shader 的通道与 Key 说明 | 🟡 Researching |
| 本站 Character Shader | 研究文档 | [Character Shader](../shaders/character-shaders.md) | 角色 Shader 的中文整理 | 🟡 Researching |
| 本站 Skin Shader | 研究文档 | [Skin Shader](../shaders/skin-shaders.md) | 皮肤相关的特殊表现 | 🟡 Researching |
| 本站 Additional Data | 研究文档 | [Additional Data](../shaders/additional-data.md) | 附加数据位与 Key 的关系 | 🟡 Researching |

Shader 研究更新极快。游戏版本一更新，旧结论可能就失效了。

---

## 版权与使用条款

FFXIV 的模型、贴图、音乐等素材版权归 Square Enix 所有。

制作与分享 Mod 时，社区普遍遵循的基本共识是：

- 不直接分发从游戏内提取的原始资源文件。
- 分发「替换用」的定制内容，而不是「完整资产包」。
- 不将 Mod 或提取素材用于商业销售。
- 引用他人作品前先确认作者是否允许转载与二次修改。

!!! warning "以官方条款为准"

    以上是社区惯例，**不等于**官方授权。
    具体允许范围以 Square Enix 公布的素材使用条款为准。

    本站不复述条款条文，也不对「某个具体做法是否合规」给出结论。
    涉及公开发布时，请自行核对官方条款与所用素材的许可。

---

## 如何判断资源是否可信

| 情况 | 建议 |
|---|---|
| 只有结论，没有说明版本 | 视为 🟡，先自行验证 |
| 引用了具体 Shader Key 或位值 | 优先参考，但仍需实测 |
| 与游戏当前版本明显不符 | 视为过期，不要直接照搬 |
| 需要付费才能看到结论 | 谨慎对待，社区资料通常公开 |

---

## References

- [XIV Modding Wiki](https://xivmodding.com/)
- [TexTools](https://github.com/TexTools/FFXIV_TexTools_UI)
- [Penumbra](https://github.com/xivdev/Penumbra)
- [XIVLauncher](https://github.com/goatcorp/FFXIVQuickLauncher)
- [Blender](https://www.blender.org/)
