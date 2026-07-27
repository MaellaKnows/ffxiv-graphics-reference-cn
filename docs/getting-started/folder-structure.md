# FFXIV文件结构

FFXIV 的游戏资源按照类别存储在游戏的 DAT 文件中。

Mod 工具（如 TexTools、Penumbra）会将这些资源映射为可编辑路径。

---

## Asset Overview（资源结构）

FFXIV 主要资源可以分为：

| Category 分类 | Extension 拓展名 | Description 描述 |
|---|---|---|
| Model | `.mdl` | 模型数据 |
| Material | `.mtrl` | 材质定义 |
| Texture | `.tex` | 纹理数据 |
| Animation | `.pap` | 动画文件 |
| Skeleton | `.sklb` | 骨骼数据 |
| VFX | `.avfx` | 特效数据 |

---

## Character Asset Structure（角色资源结构）

一个典型的角色资源树：
```
chara/
│
├── human/
│ │
│ └── c0101/
│ │
│ ├── model/
│ │ └── c0101e0001.mdl
│ │
│ ├── material/
│ │ └── c0101e0001.mtrl
│ │
│ └── texture/
│ └── c0101e0001.tex
```

---

## Equipment Structure（装备结构）

装备通常由：
```
Equipment
│
├── Model (.mdl)
│
├── Material (.mtrl)
│
├── Texture (.tex)
│
└── Color Set
```
组成。
---

## Texture Location（纹理）

常见：

```
chara/
└── common/
└── texture/
```

包含：

- Face Texture
- Eye Texture
- Hair Texture
- Skin Texture

---

## Common Terms（常见目录）

| Folder | Description |
|-|-|
| chara | 角色资源 |
| common | 通用资源 |
| weapon | 武器资源 |
| monster | 怪物资源 |
| ui | UI资源 |
| bg | 场景资源 |

---

## Mod的加载

- 通过Textools，直接修改游戏文件。
  - 优点是Textools有Prepare模式和attach模式，可以保存到tt内，或者直接连接到Penumbra进行mod的修改制作。

- 通过Penumbra，不直接修改原始 DAT文件。如今在mod社区发展完善的生态下，更推荐使用Penumbra进行mod加载。