---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DataTrans"
  text: "数据导入工具"
  tagline: "基于 FastAdmin 开发的数据批量处理异步导入插件"
  actions:
    - theme: brand
      text: "使用文档"
      link: "/guides/overview"
    - theme: alt
      text: "获取插件"
      link: "https://www.fastadmin.net/store/datatrans.html"
  image: /main.png

features:
  - title: 异步处理
    icon: 🗂️
    details: 采用消息队列分批异步处理数据，提升导入数据量及处理效率，减少服务器压力
  - title: 数据批量预处理
    icon: 📊
    details: 支持分批数据处理时进行预处理转换，支持数据列的转换表达式，满足复杂的数据处理需求
  - title: 预设导入配置
    icon: 🗒️
    details: 支持对特定数据表预设导入规则，提供灵活的配置选项，简化重复的导入操作
  - title: 任务跟踪
    icon: 🔍
    details: 完整的导入任务跟踪功能，实时监控导入进度和结果，确保数据导入的可靠性
  - title: 快速集成
    icon: ⚡
    details: 提供灵活的预配置调用，可快速将导入功能集成到其他功能模块中
  - title: 环境检查
    icon: ✅
    details: 提供环境检查功能，确保服务器环境满足导入需求，避免导入失败
---

