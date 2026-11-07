# FFXIV Graphics Reference CN

> 中文 FFXIV 图形渲染与 Mod 制作参考文档

[![ci](https://github.com/MaellaKnows/ffxiv-graphics-reference-cn/actions/workflows/ci.yml/badge.svg)](https://github.com/MaellaKnows/ffxiv-graphics-reference-cn/actions/workflows/ci.yml)

## 项目简介

FFXIV Graphics Reference CN（GRC）是一个面向中文社区的开放技术文档项目。

本站系统整理 Final Fantasy XIV 的图形渲染相关知识，包括：

- Shader Reference
- Material（`.mtrl`）
- Texture（Base Color / Normal / Mask / Multi）
- ColorSet
- Shader Key 与 Material Constant
- Vertex Color
- Penumbra / TexTools / Blender 工作流

在线阅读：https://maellaknows.github.io/ffxiv-graphics-reference-cn/

## 内容结构

```text
docs/
├── getting-started/   入门：环境、文件结构、术语与写作规范
├── shaders/           Shader：Character / Face / Eye / Hair / Skin / Glass …
├── materials/         Material：MTRL 格式、Constants、Sampler、Shader Keys
├── textures/          Texture：Base Color、Normal、Mask、Multi、ColorSet
├── workflows/         Workflow：Blender、TexTools、Penumbra、故障排除
├── modding/           Mod 制作：路径、工具、教程、资源
├── appendix/          附录：术语表、着色器参考表、更新日志、参考资料
└── assets/            图片与样式资源
```

## 本地构建

```bash
pip install -r requirements.txt
mkdocs serve          # 本地预览 http://127.0.0.1:8000
mkdocs build --strict # 构建前的严格检查
```

## 参与编写

- 编写规范：`Style Guide-术语规范.md`
- 贡献说明：`CONTRIBUTING.md`

原则：不直接复制国外 Wiki，保留英文专业术语，标注可信度（✅ / 🟡 / 🟠 / 🔴）与来源。

## 反馈

- QQ 群：453281804
- Discord：https://discord.com/invite/MaKs9YcmK9

## License

文档内容采用 CC BY-SA 4.0 协议，详见 `LICENSE`。
