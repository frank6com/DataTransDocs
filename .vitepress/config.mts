import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DataTrans",
  description:
    "DataTrans 数据导入工具是基于 FastAdmin 开发的数据批量处理异步导入插件。",
  base: "/DataTransDocs/",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "使用帮助", link: "/usage/overview" },
      { text: "开发参考", link: "/dev/index" },
      { text: "更新日志", link: "/changelogs/list" },
      {
        text: "获取插件",
        link: "https://www.fastadmin.net/store/datatrans.html",
      },
    ],

    sidebar: {
      "/usage/": [
        {
          text: "快速入门",
          collapsed: false,
          items: [
            { text: "介绍", link: "/usage/overview" },
            {
              text: "安装与配置",
              link: "/usage/installation",
            },
          ],
        },
        {
          text: "使用指南",
          collapsed: false,
          items: [
            { text: "预设配置管理", link: "/usage/configuration" },
            { text: "导入任务管理", link: "/usage/task" },
            { text: "任务日志管理", link: "/usage/log" },
            { 
              text: "高级功能 <span style='display: inline-block;margin-left: 2px;border: 1px solid transparent;border-radius: 12px;padding: 0 10px;line-height: 22px;font-size: 12px;font-weight: 500;transform: translateY(-2px);border-color: var(--vp-badge-danger-border);color: var(--vp-badge-danger-text);background-color: var(--vp-badge-danger-bg);'> HOT </span>", 
              collapsed: false,
              items: [
                { text: "导入按钮引用", link: "/usage/button-reference" },
                { text: "字段处理表达式", link: "/usage/field-expression" },
                { text: "导入预览", link: "/usage/import-preview" },
              ]
            },
          ],
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: "常见问题", link: "/usage/faq" },
            { text: "未来计划", link: "/usage/future-plans" },
          ]
        }
      ],
      "/dev/": [
        {
          text: "开发参考",
          collapsed: false,
          items: [
            { text: "介绍", link: "/dev/index" },
          ]
        },
        {
          text: "文件结构",
          collapsed: true,
          items: [
            {
              text: "插件配置项",
              link: "/dev/addon-configurations",

            },
            { 
              text: "公共类库", 
              collapsed: false,
              items: [
                { text: "队列处理类", link: "/dev/library/datatrans-job" },
                { text: "主键表达式类", link: "/dev/library/primary-key-expression" },
                { text: "字段处理表达式类", link: "/dev/library/field-value-expression" },
                { text: "任务管理类", link: "/dev/library/task-manager" },
                { text: "工具类", link: "/dev/library/utility" },
                { text: "环境检查类", link: "/dev/library/env-checker" },
                { text: "导入器", link: "/dev/library/importer" },
              ]
            },
            {
              text: "控制器",
              collapsed: false,
              items: [
                { text: "预设配置控制器", link: "/dev/controllers/configuration" },
                { text: "导入任务控制器", link: "/dev/controllers/task" },
                { text: "日志控制器", link: "/dev/controllers/log" },
              ]
            },
            {
              text: "模型",
              collapsed: false,
              items: [
                { text: "预设配置模型", link: "/dev/models/configuration" },
                { text: "导入任务模型", link: "/dev/models/task" },
                { text: "日志模型", link: "/dev/models/log" },
              ]
            },
            {
              text: "视图",
              collapsed: false,
              items: [
                { text: "公共模板", link: "/dev/views/common" },
                { text: "预设配置视图", link: "/dev/views/configuration" },
                { text: "导入任务视图", link: "/dev/views/task" },
                { text: "日志视图", link: "/dev/views/log" },
              ]
            },
            {
              text: "前端资源",
              collapsed: false,
              items: [
                { text: "全局JS", link: "/dev/frontend/bootstrap-js" },
                { text: "预设配置JS", link: "/dev/frontend/configuration-js" },
                { text: "导入任务JS", link: "/dev/frontend/task-js" },
                { text: "日志JS", link: "/dev/frontend/log-js" },
                { text: "CSS", link: "/dev/frontend/css" },
              ]
            }
          ],

        },
        {
          text: "其他资源",
          collapsed: false,
          items: [{ text: "常见问题", link: "/dev/faq" }],
        },
      ],
      "/changelogs/": [
        {
          text: "更新日志",
          link: "/changelogs/list",
          collapsed: false,
          items: [
              { text: "v0.1.0", link: "/changelogs/version-0.1.0" },
          ],
        },
      ],
    },
    outline: 'deep',
    socialLinks: [{ icon: "github", link: "https://github.com/frank6com" }],
  },
});
