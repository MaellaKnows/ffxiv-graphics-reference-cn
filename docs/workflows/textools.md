# TexTools 使用

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

TexTools（资源提取与打包工具）是 FFXIV Mod 制作中最常用的 Windows 桌面工具之一。

它负责从游戏数据中取出资源，也负责把修改后的贴图、模型和材质送回可被游戏读取的格式；模型与贴图通常在 Blender（三维建模软件）和 Photoshop 中编辑，最终由 Penumbra（模组加载器）加载。

本页只讲通用流程，不逐按钮截图。具体菜单名称以当前版本实际界面为准。

---

## 它在流程中的位置

```mermaid
flowchart LR
    A["游戏原始资源"] --> B["TexTools 解包 / 预览"]
    B --> C["Blender / Photoshop 编辑"]
    C --> D["TexTools 导入 / 生成 .tex、.mtrl"]
    D --> E["modpack 或 Penumbra 目录"]
    E --> F["游戏内测试"]
```

TexTools 既是「入口」，也是「出口」。中间的可编辑文件不应直接丢进游戏目录。

---

## 主要用途

| 功能 | 说明 | 典型产出 |
|---|---|---|
| 解包与浏览 | 按游戏路径查找模型、贴图、材质 | 原始 `.mdl`、`.tex`、`.mtrl` |
| 模型预览 | 在导入游戏前检查 Mesh 与材质 | 预览截图、问题记录 |
| 贴图导出 | 将 `.tex` 转为可编辑的 DDS | `.dds` 或 PNG 中间文件 |
| 贴图导入 | 将 DDS 写回 `.tex` | 游戏可读的 `.tex` |
| 材质编辑 | 调整 Shader、Texture Slot、Sampler、Constant | 修改后的 `.mtrl` |
| 打包 | 将改动收集为 TexTools modpack | `.ttmp2` |

!!! note "不是建模工具"
    TexTools 可以预览和导入模型，但不适合做复杂 Mesh 编辑。建模、UV 与权重仍应在 Blender 中完成。

---

## 典型操作流程

1. 关闭游戏，或确认游戏没有占用目标文件。
2. 启动 TexTools，选择与当前游戏版本匹配的数据源。
3. 用搜索或路径浏览定位目标装备、角色部位或物件。
4. 先预览模型与材质，确认资源路径和 Shader。
5. 导出原始 `.mdl`、相关 `.tex` 和 `.mtrl`，放入单独的 `source/` 目录。
6. 在 Blender 中修改 Mesh、UV、法线与权重，在 Photoshop 中修改贴图。
7. 回到 TexTools，将编辑后的 DDS 导入为 `.tex`，保持原始路径与文件名。
8. 如需改材质，复制原始 `.mtrl` 后只改必要的 Texture Slot、Sampler 或 Constant。
9. 新建 modpack，把修改过的文件按游戏路径加入，不要加入无关的工作文件。
10. 导出 `.ttmp2`，先在干净环境中测试，再决定是否转换为 Penumbra 结构。

!!! tip "先记录路径"
    每次导出前记录完整资源路径。后续贴图不生效、模型消失，绝大多数都是路径或文件名不一致。

---

## 导出贴图到 DDS 的注意点

| 项目 | 建议 | 原因 |
|---|---|---|
| 色彩空间 | Base Color 用 sRGB；Normal、Mask、Multi 用 Linear | 色彩空间错了会发灰、发白或法线方向异常 |
| 分辨率 | 与原始贴图一致，或按 2 的幂次调整 | 非预期缩放会糊，也会增加显存占用 |
| 压缩格式 | 颜色用 BC7 / BC3，法线用 BC5 等；以当前版本支持为准 🟡 | 有损压缩会影响渐变、Alpha 与法线质量 |
| Alpha | 需要透明时保留 Alpha，不要用 JPEG 中转 | JPEG 不保留 Alpha，会导致透明失效 |
| Mipmap | 按工具默认生成，检查远景是否糊 | 缺失或错误的 Mip 会在远距离暴露问题 |
| 通道打包 | Mask、Multi 按原贴图通道含义填写 | 通道错位会表现为高光、粗糙度或 AO 异常 |
| 文件名与路径 | 与原 `.tex` 完全一致 | 游戏按路径加载，不会按内容猜文件名 |

DDS 只是中间容器。真正进入游戏的是 TexTools 生成的 `.tex`，所以每次替换后都要确认目标 `.tex` 已更新。

!!! warning "不要反复有损压缩"
    不要在同一张 DDS 上反复「打开—保存—再压缩」。每次 BC 压缩都会损失细节，尤其是 Normal Map 和细线 Alpha。

Base Color 的通道与用途可参考 [Base Color](../textures/base-color.md)。

---

## TexTools modpack 与 Penumbra 的关系

两者都能分发 Mod，但组织方式不同。

| 项目 | TexTools modpack | Penumbra |
|---|---|---|
| 常见扩展名 | `.ttmp2` | `.pmp` 或 mod 目录 |
| 核心思路 | 把替换文件打成一个补丁包 | 运行时按路径覆盖资源 |
| 分组与选项 | 由 modpack 结构决定 | Group / Option 可在游戏内切换 |
| 优先级 | 通常依赖安装顺序 | 有独立的优先级与冲突管理 |
| 适合场景 | 传统 TexTools 工作流、旧 Mod | 日常使用、分享、快速迭代 |

!!! note "转换不是无损的"
    Penumbra 对 TexTools modpack 的导入支持会随版本变化 🟡。即使能导入，也不要假设原来的分组、选项和路径会自动整理正确；导入后要逐项检查。

建议把 TexTools 当作资源与材质编辑器，把 Penumbra 当作最终加载与分发层。这样更新贴图时，不需要重新理解整个 modpack。

Penumbra 的目录与 `.pmp` 细节见 [Penumbra 使用](penumbra.md)。

---

## 常见问题

### 导入后游戏内不生效

- 确认 TexTools 写入的是当前游戏版本的数据，而不是旧备份。
- 检查 `.tex` 或 `.mdl` 的路径、文件名、大小写是否与原始资源一致。
- 确认 mod 已启用，且没有被更高优先级的 mod 覆盖。
- 完全重启游戏，而不是只切换场景。
- 如果使用 Penumbra，检查 mod 目录中的文件是否真的位于对应路径。

### 贴图变糊

- 检查导出分辨率是否被无意缩小。
- 检查 DDS 压缩格式是否过低，尤其是带细线的 Alpha。
- 确认 Mipmap 正常生成，但不要用过度锐化掩盖压缩损失。
- 确认没有把 Normal Map 当作 Base Color 导入，或反之。
- 在游戏内靠近与拉远各看一次，区分「贴图糊」与「Mip 过渡糊」。

### mtrl 版本不匹配

症状可能是材质发紫、全黑、全白，甚至加载失败。

- 游戏更新后，旧 modpack 中的 `.mtrl` 可能不再匹配当前格式。
- 优先从当前游戏版本重新导出原始 `.mtrl`，再迁移必要修改。
- 不要直接套用来源不明的旧 `.mtrl`，也不要手改未知版本字段。
- 确认 TexTools 版本支持当前游戏版本。
- 结构说明见 [MTRL 格式](../materials/mtrl-format.md)。

---

## 导出前检查清单

- [ ] 目标资源路径已记录，且与原始文件一致。
- [ ] 只包含需要替换的文件，没有混入 PSD、Blend 或缓存。
- [ ] 贴图分辨率、色彩空间、Alpha 与压缩格式正确。
- [ ] `.mtrl` 来自当前版本，Shader 与 Texture Slot 未被误改。
- [ ] mod 在干净配置中单独测试通过。
- [ ] 已保留原始资源与一个可用版本。

---

## References

- TexTools：https://github.com/TexTools/FFXIV_TexTools_UI
- TexTools Wiki：https://github.com/TexTools/FFXIV_TexTools_UI/wiki
- TexTools Releases：https://github.com/TexTools/FFXIV_TexTools_UI/releases
- Penumbra：https://github.com/xivdev/Penumbra
- XIV Modding Wiki：https://xivmodding.com/
- Microsoft DDS 编程指南：https://learn.microsoft.com/en-us/windows/win32/direct3ddds/dx-graphics-dds-pguide
