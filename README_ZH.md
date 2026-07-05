# Anima Pipeline

<p align="center">
  <img src="images/hero-ui-and-result.jpg" alt="Anima Pipeline UI + 生成图片" width="800">
  <br>
  <em>输入角色名称 → LLM自动生成Danbooru标签 → 一键生成精美Anima图片！</em>
</p>

浏览器UI + LLM自动化Anima工作流！

[![日本語 README](https://img.shields.io/badge/日本語-README-green?logo=github)](README.md)
[![English README](https://img.shields.io/badge/English-README-blue?logo=github)](README_EN.md)

## 🌐 在线演示/落地页
- [日文版网站](https://tomotto1296.github.io/anima-pipeline/index.html)
- [English Version](https://tomotto1296.github.io/anima-pipeline/index_en.html)
- [中文版](https://tomotto1296.github.io/anima-pipeline/index_zh.html)
- [试用演示](https://tomotto1296.github.io/anima-pipeline/demo.html)

<p align="center">
  <img src="demo/demo-flow.gif" alt="演示GIF" width="600">
</p>

---

## 当前版本与文档

- 当前版本: `v1.5.21`
- 已实现功能列表: [docs/specs/features.md](docs/specs/features.md)
- 路线图: [docs/updates/roadmap.md](docs/updates/roadmap.md)
- 更新日志: [docs/updates/Update.md](docs/updates/Update.md)

---

## 所需环境

- Python 3.10以上（如内置 `python_embeded/python.exe` 则无需系统Python）
- ComfyUI 0.16.4以上 + Anima工作流
- LLM服务（LM Studio / Gemini API等）※可选

---

## 安装设置

### 1. 准备工作流JSON

`workflows/image_anima_preview.json` 未包含在仓库中。请按以下步骤获取：

1. 启动ComfyUI
2. 右上菜单 →「Browse Templates」→ 选择 **Anima**
3. 菜单 →「Save (API Format)」保存为 `image_anima_preview.json`
4. 放入 `workflows/` 目录

> **也可以使用自定义工作流。** 将ComfyUI「Save (API Format)」输出的JSON放入 `workflows/` 即可在下拉菜单中选取。

### 2. 启动

**Windows:** 双击 `start_anima_pipeline.bat`（首次运行自动安装 `requests`）

> 如果bat文件用VS Code等程序打开，请右键 →「打开方式」→ 选择「命令提示符」。

**其他系统:**
```bash
pip install requests
python anima_pipeline.py
```

在浏览器中打开 http://localhost:7860。

### 3. 初始配置

打开界面顶部的「▶ 设置」，确认ComfyUI地址，点击「💾 保存设置」。

使用LLM时选择平台（LM Studio / Gemini / 自定义），输入URL、API密钥和模型名称后保存。

### 4. ComfyUI启动选项（推荐）

手机访问或使用LoRA缩略图功能时，请添加以下选项：

```
.\python_embeded\python.exe -s ComfyUI\main.py --windows-standalone-build --lowvram --listen --enable-cors-header
```

---

## 主要功能（最新版）

| 状态 | 功能 |
|---|---|
| ☑ | 角色名/作品名的日文/英文分离输入（`name_en` / `series_en`） |
| ☑ | 正向/负向标签预设保存与加载 |
| ☑ | 预设层级化（chara / scene / camera / quality / lora / composite） |
| ☑ | 生成历史数据库（全历史UI + 重新编辑） |
| ☑ | 命名会话保存（多插槽·覆盖确认） |
| ☑ | 设置自诊断UI（`/diagnostics`） |
| ☑ | 元数据嵌入（PNG/WebP、LoRA哈希等） |
| ☑ | UI-5: 显示主题切换（Device / Light / Dark）与暗色模式视觉优化 |
| ☑ | GEN-9: 「今日心情」按钮（随机应用 + 状态摘要显示） |
| ☑ | INPUT-1: 随机角色预设创建（含保存确认流程） |
| ☑ | SHARE-1: 预设共享ZIP导出/导入（`/presets_export`·`/presets_import`） |
| ☑ | OUTPUT-9: 历史对比显示（正向常显、负向差异时显示、Show/Hide切换） |
| ☑ | LoRA注入（卡片网格UI·缩略图显示·最多4插槽） |
| ☑ | 工作流切换（从 `workflows/` 选择·节点ID自动检测） |
| ☑ | UI语言切换（日本語 / English / 中文） |
| ☑ | 显示主题切换（Device / Light / Dark）与暗色模式视觉优化 |
| ☑ | 日志功能（保存·敏感信息遮蔽·ZIP导出） |

> 详细功能列表（含版本号）请参阅 [docs/specs/features.md](docs/specs/features.md)。

---

## 文档结构（docs/）

- 指南: [docs/guides/README.md](docs/guides/README.md)
- 规格: [docs/specs/README.md](docs/specs/README.md)
- 更新日志: [docs/updates/Update.md](docs/updates/Update.md)
- 路线图: [docs/updates/roadmap.md](docs/updates/roadmap.md)
- 发布说明: `docs/release_notes/`
- 文章草稿: `docs/articles/`

---

## 文件结构

```text
anima_pipeline/
  anima_pipeline.py
  core/                           ← 服务器/生成/历史/预设等模块
  frontend/                       ← index.html / i18n.js
  docs/
    guides/
    specs/
    updates/
    release_notes/
    articles/
  workflows/                      ← 存放工作流JSON
  settings/                       ← pipeline_config / ui_options / prompt设置
  presets/                        ← 层级化预设(chara/scene/camera/quality/lora/composite)
  sessions/                       ← 命名会话保存目录
  history/                        ← 生成历史数据库
  logs/                           ← 运行日志
```

---

## 路线图概要

- `v1.4.8〜v1.5.0`: 基础阶段（已完成）
- `v1.5.1`: 日常使用强化阶段（已完成: LoRA管理强化·随机预设·预设共享）
- `v1.5.2`: 批量生产·亮点阶段（计划: 批量生成·生成队列·对比生成·图片→提示词还原）
- `v1.5.x〜`: 高级功能（LLM评估·自动标签生成·还原辅助）

详细内容请参阅 [docs/updates/roadmap.md](docs/updates/roadmap.md)。

## 相关文章
- note: https://note.com/rhustudio/n/nf0dc2414f852
- Qiita: https://qiita.com/RHU/items/18095cb22281cd027bc4
- zenn: https://zenn.dev/rhu/articles/anima-pipeline-comfyui-llm
