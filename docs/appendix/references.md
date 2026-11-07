# 参考资料

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

> 本站的每一条结论，都应该能追溯到下面的某个来源。

本页按类型整理外部资料，并说明站内如何使用状态标记。

---

## 文档与 Wiki

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| XIV Modding Wiki | 社区文档站 | [xivmodding.com](https://xivmodding.com/) | 资源参考、Shader 参考表、流程说明 | ✅ Verified |
| xivmods.guide | 社区文档站 | [xivmods.guide](https://www.xivmods.guide/) | 入门向流程与概念说明 | 🟡 Researching |
| 本站术语表 | 站内整理 | [术语表](glossary.md) | 中英术语对照 | 🟡 Researching |
| 本站着色器参考表 | 站内整理 | [着色器参考表](materials-table.md) | Shader 与通道对照 | 🟡 Researching |

XIV Modding Wiki 是本站最主要的外部参照。站内许多表格与描述源自该站，再经中文整理与补充。

---

## 工具仓库

日常使用最多的是 TexTools（资源处理）与 Penumbra（模组加载器，运行时加载）。

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| TexTools | 工具仓库 | [FFXIV-TexTools/tools-update](https://github.com/TexTools/FFXIV_TexTools_UI) | 资源提取、导入、打包 | ✅ Verified |
| Penumbra | 工具仓库 | [xivdev/Penumbra](https://github.com/xivdev/Penumbra) | 运行时加载 `Penumbra mod（.pmp）` | ✅ Verified |
| XIVLauncher | 工具仓库 | [goatcorp/FFXIVQuickLauncher](https://github.com/goatcorp/FFXIVQuickLauncher) | 启动器与插件环境 | ✅ Verified |
| Dalamud | 工具仓库 | [goatcorp/Dalamud](https://github.com/goatcorp/Dalamud) | 插件框架 | 🟡 Researching |

仓库的 Release 说明是判断「某功能从哪个版本开始可用」的第一手来源。

---

## 着色器与材质研究

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| XIV Modding Wiki · Shader Reference | 社区研究 | [xivmodding.com](https://xivmodding.com/) | 各 Shader 的通道、Key、Constant 说明 | 🟡 Researching |
| 本站 Character Shader | 站内整理 | [Character Shader](../shaders/character-shaders.md) | 角色 Shader 中文说明 | 🟡 Researching |
| 本站 Skin Shader | 站内整理 | [Skin Shader](../shaders/skin-shaders.md) | 皮肤相关特殊表现 | 🟡 Researching |
| 本站 Character Transparency Shader | 站内整理 | [Character Transparency Shader](../shaders/character-transparency-shader.md) | 透明与抖动相关机制 | 🟡 Researching |
| 本站 Additional Data | 站内整理 | [Additional Data](../shaders/additional-data.md) | 附加数据位与 Shader Key 的关系 | 🟡 Researching |
| 本站 `.mtrl` 格式 | 站内整理 | [`.mtrl` 格式](../materials/mtrl-format.md) | 材质文件结构 | 🟡 Researching |

!!! note "研究类资料的特点"

    这类来源的结论往往来自社区实测，没有官方文档背书。
    同一条结论在不同版本之间可能失效，引用时务必带上版本。

---

## 官方文档

| 名称 | 类型 | 链接 | 用途 | 可信度 |
|---|---|---|---|---|
| FINAL FANTASY XIV 官方网站 | 官方站点 | [finalfantasyxiv.com](https://www.finalfantasyxiv.com/) | 版本信息、公告、素材条款入口 | ✅ Verified |
| Microsoft DirectX 文档 | 官方文档 | [learn.microsoft.com](https://learn.microsoft.com/windows/win32/direct3d12/) | 渲染管线、纹理格式基础 | ✅ Verified |
| DirectX · DDS 编程指南 | 官方文档 | [learn.microsoft.com](https://learn.microsoft.com/windows/win32/direct3ddds/dx-graphics-dds) | `.dds` 格式与压缩类型 | ✅ Verified |
| Blender 官方文档 | 官方文档 | [docs.blender.org](https://docs.blender.org/) | 建模、UV、法线、权重 | ✅ Verified |
| Blender 官网 | 官方站点 | [blender.org](https://www.blender.org/) | 下载与版本说明 | ✅ Verified |

!!! warning "官方文档不覆盖 FF14 格式"

    微软与 Blender 的官方文档能解释**通用格式**，但解释不了 FF14 的 `.mtrl` / `.mdl`。
    FF14 专有的部分只能依赖社区资料与实测。

---

## 引用规范

站内每个关键结论后都会带一个状态标记。标记表示**这条信息当前的可信程度**，不是重要性。

| 标记 | 含义 | 使用条件 |
|---|---|---|
| ✅ Verified | 已验证 | 经过实测，或有明确的一手来源支持 |
| 🟡 Researching | 整理中 | 有社区资料支持，但未在站内完整复核 |
| 🟠 Hypothesis | 推测 | 基于间接证据的推断，尚未验证 |
| 🔴 Unknown | 未知 | 目前没有可用信息，或已知存在空白 |

### 使用规则

1. **结论必须带标记**。没有标记的句子，默认视为未复核。
2. **🟡 升级为 ✅ 需要实测**。转发别人的结论不算验证。
3. **🟠 必须写清推测依据**。不能只写结论。
4. **🔴 用来标注缺口**，而不是用来回避问题。知道哪里不知道，本身就是信息。
5. **标记跟随版本**。大版本更新后，原标记应重新评估。

### 标记写法示例

```markdown
Skin Shader 在 Shader ID 设为 10 时会启用金属度。✅ Verified

透明效果与网格法线方向有关。🟡 Researching

抖动失效可能与附加数据位有关。🟠 Hypothesis

球面贴图的瓦片编号规则。🔴 Unknown
```

### 引用外部资料时

- 优先引用**原始出处**，而不是二手转述。
- 链接尽量指向**具体页面**，而不是站点首页。
- 记录**访问时的游戏版本**，因为结论会随版本变化。
- 不引用无法追溯来源的截图或聊天记录。

---

## References

- [XIV Modding Wiki](https://xivmodding.com/)
- [TexTools](https://github.com/TexTools/FFXIV_TexTools_UI)
- [Penumbra](https://github.com/xivdev/Penumbra)
- [XIVLauncher](https://github.com/goatcorp/FFXIVQuickLauncher)
- [Blender](https://www.blender.org/)
