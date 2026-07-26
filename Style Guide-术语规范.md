# Style Guide

> FFXIV Graphics Reference CN Writing Style Guide

本规范定义了 FFXIV Graphics Reference CN 的编写标准。

所有页面均应遵循本规范，以保证整个文档的一致性、可维护性和专业性。

---

# General Principles

## Write for mod authors

本文档面向：

- FFXIV Mod 作者
- Shader 研究者
- Penumbra / TexTools 用户
- Blender 用户

不是游戏玩家。

---

## Explain before documenting

不要只描述：

❌ Character Glass 使用 XXX。

应该解释：

✔ 为什么 Character Glass 会这样工作。

---

## Prefer verified information

优先写：

✔ 已验证

其次：

✔ 社区推测

最后：

✔ 未知

不要把推测写成事实。

---

# Language

整个 Wiki 使用：

中文（简体）

专业术语保留英文。

例如：

Shader（着色器）

Material（材质）

Normal Map（法线贴图）

不要全部翻译。

---

# Terminology

## 保持英文

以下词汇全文保留英文：

Shader

Material

Material Constant

Shader Key

Vertex Color

Colorset

Sampler

Texture Slot

Normal Map

Mask Map

Flow Map

SphereMap

Draw Call

Pipeline

UV

Vertex

Pixel

Mesh

LOD

Opacity

Transparency

Emissive

Specular

Roughness

Ambient Occlusion（AO）

---

## 推荐写法

正确：

Shader（着色器）

错误：

着色器（Shader）

保持全文一致。

---

# File Naming

全部：

小写

使用 kebab-case

例如：

character-glass.md

character-scroll.md

material-constants.md

shader-key.md

不要：

CharacterGlass.md

GlassShader.md

shaderKey.md

---

# Folder Structure

Character Shader：

docs/shaders/character/

Furniture：

docs/shaders/furniture/

Workflow：

docs/workflows/

Guide：

docs/guides/

Reference：

docs/reference/

---

# Page Structure

所有 Shader 页面必须包含：

# Title

## Overview

## Shader File

## Supported Versions

## Official Usage

## Texture Slots

## Vertex Colors

## UV Channels

## Material Constants

## Shader Keys

## Additional Data

## Penumbra Mapping

## TexTools Mapping

## Modding Tips

## Known Issues

## References

可以增加。

不能删除。

---

# Status

所有研究内容必须标记：

✅ Verified

🟡 Researching

🟠 Hypothesis

🔴 Unknown

例如：

## Vertex Color

Status

Researching

---

# Terminology Rules

统一：

Base Color

不要：

Diffuse Texture

统一：

Mask Map

不要：

Mask Texture

统一：

Alpha

不要：

Opacity Channel

统一：

SphereMap

不要：

Sphere Map

统一：

FlowMap

不要：

Flow Map

---

# Tables

优先使用表格。

例如：

| Channel | Usage |
|---------|------|
| R | Specular |
| G | Roughness |
| B | AO |
| A | Unused |

不要：

R

Specular

G

Roughness

---

# Warnings

统一使用：

!!! warning

!!!

不要：

⚠⚠⚠⚠

---

# Notes

统一：

!!! note

---

# Tips

统一：

!!! tip

---

# Images

图片统一放置：

assets/images/

命名：

character-glass-mask.png

全部：

小写

kebab-case

---

# Diagrams

推荐使用：

Mermaid

而不是截图。

例如：

flowchart TD

Texture --> Shader

Shader --> Material

Material --> Render

---

# References

所有页面必须注明：

## References

包括：

xivmodding

Penumbra

TexTools

社区实验

GitHub

不要写：

来源不明。

---

# Experimental Content

实验内容必须标记：

Experimental

并说明：

测试版本

测试方法

测试结果

---

# Versioning

所有页面写：

Applies to

7.3

Last Updated

2026-07-27

---

# Style

推荐：

短句。

一段不超过四行。

避免大段文字。

优先：

列表

流程图

表格

示意图

---

# Goal

帮助读者理解。

不是翻译网页。

不是复制国外 Wiki。

而是建立中文社区最完整、最准确的 FFXIV 图形技术参考文档。
