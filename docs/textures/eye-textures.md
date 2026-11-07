# Eye Textures（眼睛贴图）

> Applies to: 7.x（Dawntrail） ｜ Last Updated: 2026-11-01

眼睛由多张贴图分工完成，而不是一张贴图包办。

理解分工比记住文件名重要，因为不同种族、不同版本的文件命名都不一样。

!!! warning "命名不可靠"
    眼睛相关资源的命名在版本之间变动过多次。**以实际资源与 Material 的 Slot 绑定为准**，不要按名字猜用途。

---

## 贴图分工

| 贴图 | 主要职责 | 常见称呼 | 可信度 |
|---|---|---|---|
| Eye Diffuse | 虹膜颜色、眼白颜色、瞳孔 | Iris / Eye | 🟡 Researching |
| Eye Normal | 角膜与虹膜的凹凸 | Eye Normal | 🟡 Researching |
| Eye Mask | 高光、湿润度、反射控制 | Eye Mask | 🟠 Hypothesis |
| Eye Occlusion | 眼睑投在眼球上的阴影 | Occlusion | 🟡 Researching |
| Catchlight | 眼睛高光点 | Catchlight / Highlight | 🟡 Researching |

Dawntrail 之后，虹膜与巩膜可以出现在同一张贴图上，这改变了很多旧教程的前提。

| 变化 | 影响 | 可信度 |
|---|---|---|
| 虹膜与眼白合并到同一张 Diffuse | 不能再用两张图分别控制 | 🟡 Researching |
| 高光改由 Shader 与环境产生 | 自定义高光贴图不再生效 | 🟡 Researching |
| 部分虹膜细节由 Shader 绘制 | 贴图无法覆盖该部分 | 🟠 Hypothesis |

!!! note "先读 Shader 页"
    眼睛的表现高度依赖 Shader。改贴图之前先看 [Eye Shader](../shaders/eye-shaders.md)，遮挡问题看 [Eye Occlusion Shader](../shaders/eye-occlusion-shader.md)。

---

## Eye Diffuse

眼睛最主要的颜色来源。

| 区域 | 内容 |
|---|---|
| 虹膜 | 主色、纹理、明暗渐变 |
| 瞳孔 | 通常为深色或接近纯黑 |
| 眼白 | 偏暖或偏冷的灰白 |
| 边缘 | 虹膜与眼白之间的过渡 |

- 虹膜的明暗对比不要过强，Shader 会再叠加高光。
- 瞳孔位置必须与 UV 对应，偏移会让视线看起来歪斜。
- 眼白不要画成纯白，纯白在游戏内会非常刺眼。

---

## Catchlight 与高光位置

高光决定眼睛「有没有神」。

| 来源 | 可控性 | 说明 |
|---|---|---|
| Shader 生成的球面贴图 | 低 | 随视角与光照变化 |
| 画在 Diffuse 上的假高光 | 高 | 位置固定，不随视角移动 |
| 光照产生的反射 | 中 | 取决于材质参数 |

!!! tip "假高光的取舍"
    把高光画进 Diffuse 是可行的，但它是静态的：角色转头时高光不会跟着移动。适合风格化处理，不适合追求真实感。

高光位置的一般规律：

- 位于虹膜上方偏外侧，与主光源方向一致。
- 左右眼的高光应对称，除非刻意做破格效果。
- 高光面积过大会冲淡虹膜颜色。

---

## 虹膜 UV 与左右眼

大多数角色的左右眼共用同一套 UV。

- 一张贴图同时作用于两只眼睛。
- 镜像 UV 会让图案左右翻转。
- 想让左右眼不同，需要靠 UV 布局或额外资源实现。

| 情况 | 表现 | 处理 |
|---|---|---|
| 共用 UV | 左右眼完全一致 | 正常 |
| 镜像 UV | 图案左右对称 | 注意不对称图案会翻面 |
| 独立 UV | 左右眼可分别绘制 | 少见，需确认模型 |

!!! warning "左右眼不对称是常见事故"
    画了一个偏向一侧的虹膜纹理，结果另一只眼睛的高光在错误的一侧。绘制时应以镜像为前提检查一遍。

---

## Alpha 与瞳孔

Alpha 在眼睛贴图上的用途不稳定，随 Shader 变化。

| 可能用途 | 结果 | 可信度 |
|---|---|---|
| 整体透明度 | 值过低头部出现空洞 | 🟡 Researching |
| 遮罩 | 控制某层是否显示 | 🟠 Hypothesis |
| 未使用 | 填什么都一样 | 🟠 Hypothesis |

!!! warning "Alpha 全黑是最常见的全黑原因"
    如果眼睛贴图的 Alpha 被填成 0，而当前 Shader 把它当透明度读，眼睛会直接消失或渲染成黑色。

    处理：先把 Alpha 填满纯白，确认眼睛正常显示，再逐步调整。

瞳孔的深色应该画在 RGB 上，而不是靠 Alpha 去挖。

---

## 异色瞳（Heterochromia）

异色瞳指左右眼颜色不同。

| 做法 | 原理 | 适用性 |
|---|---|---|
| 利用独立 UV 分区 | 左右眼分别占据不同 UV 区域 | 需要模型支持 |
| 在 Diffuse 上直接绘制 | 一张图左右不同 | 最简单，但受 UV 影响 |
| 靠 Color Set / 染色影响 | 用参数制造差异 | 效果有限 |
| 额外贴图资源 | 独立控制每只眼 | 依赖 Shader 支持 |

Dawntrail 之后，因为虹膜与眼白合并，部分旧的多层做法不再适用，标 🟡。

制作时需要注意：

- 两侧对比不要过于强烈，否则在弱光环境下看起来像贴图错误。
- 过渡区放在虹膜外缘，不要横穿瞳孔。
- 保存多套版本，方便回退。

---

## Eye Occlusion

遮挡贴图负责眼睑在眼球上的投影。

| 现象 | 原因 |
|---|---|
| 眼睛看起来「浮」在脸上 | 缺少遮挡阴影 |
| 眼睑边缘有硬边 | 遮挡贴图对比过强 |
| 眼球整体发暗 | 遮挡范围过大 |

遮挡通常不需要精细绘制，柔和的渐变比锐利的形状更自然。

具体通道与用法见 [Eye Occlusion Shader](../shaders/eye-occlusion-shader.md)。

---

## 常见错误

| 现象 | 原因 | 处理 |
|---|---|---|
| 眼睛全黑 | Alpha 被当作透明度 | 填充 Alpha 后重试 |
| 双眼不对称 | 镜像 UV 未考虑 | 按镜像检查图案 |
| 高光在错误位置 | 假高光方向与光源不符 | 调整到虹膜上外侧 |
| 虹膜看起来像塑料 | Normal 强度过高 | 降低法线强度 |
| 眼白过曝 | 眼白画成纯白 | 改为浅灰 |
| 瞳孔偏移 | UV 与瞳孔位置不匹配 | 重新对位 |
| 边缘有锯齿 | 分辨率不足或 Alpha Test | 提高分辨率，检查裁切 |
| 改了没变化 | Slot 绑定或 Shader 不支持 | 核对 Material |

### 法线过强

眼睛表面应该是光滑的，角膜只有非常轻微的弧度。

Normal 强度过高会让虹膜看起来凹凸不平，像粗糙的石头。处理方式是把强度降到很低，甚至接近平坦，让 Shader 的高光去表现光泽。

---

## 检查清单

- [ ] 已确认当前使用的 Eye Shader
- [ ] 虹膜与眼白的关系符合 Dawntrail 结构
- [ ] Alpha 通道不会导致透明或全黑
- [ ] 左右眼按镜像检查过
- [ ] Normal 强度足够低
- [ ] 遮挡贴图过渡柔和

---

## References

| 名称 | 说明 | 链接 |
|---|---|---|
| XIV Modding Wiki | FFXIV Mod 资源与研究报告 | https://xivmodding.com/ |
| Dawntrail Shader Reference Table | Iris Shader 与通道参考 | https://xivmodding.com/books/ff14-asset-reference-document/page/dawntrail-shader-reference-table |
| Penumbra | Mod 加载框架 | https://github.com/xivdev/Penumbra |
| TexTools | 贴图与模型编辑工具 | https://github.com/TexTools/FFXIV_TexTools_UI |
| Blender Manual | 贴图与法线烘焙参考 | https://docs.blender.org/manual/en/latest/ |

眼睛相关资源的命名与通道分工仍在研究中，标 🟡 / 🟠 的内容会随验证更新。
