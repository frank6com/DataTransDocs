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
      { text: "使用指引", link: "/guides/overview" },
      { text: "更新日志", link: "/changelogs/list" },
      {
        text: "获取插件",
        link: "https://www.fastadmin.net/store/datatrans.html",
      },
    ],

    sidebar: {
      "/guides/": [
        {
          text: "快速入门",
          collapsed: false,
          items: [
            { text: "介绍", link: "/guides/overview" },
            {
              text: "安装与配置",
              link: "/guides/installation",
            },
          ],
        },
        {
          text: "使用指南",
          collapsed: false,
          items: [
            { text: "预设配置管理", link: "/guides/usage/configuration" },
            { text: "导入任务管理", link: "/guides/usage/task" },
            { text: "任务日志管理", link: "/guides/usage/log" },
            { text: "导入按钮引用", link: "/guides/usage/button-reference" },
          ],
        },
        {
          text: "文件结构",
          collapsed: true,
          items: [
            {
              text: "插件配置项",
              link: "/guides/addon-configurations",

            },
            { 
              text: "公共类库", 
              collapsed: false,
              items: [
                { text: "队列处理类", link: "/guides/library/datatrans-job" },
                { text: "主键表达式类", link: "/guides/library/primary-key-expression" },
                { text: "字段处理表达式类", link: "/guides/library/field-value-expression" },
                { text: "任务管理类", link: "/guides/library/task-manager" },
                { text: "工具类", link: "/guides/library/utility" },
                { text: "环境检查类", link: "/guides/library/env-checker" },
              ]
            },
            {
              text: "控制器",
              collapsed: false,
              items: [
                { text: "预设配置控制器", link: "/guides/controllers/configuration" },
                { text: "导入任务控制器", link: "/guides/controllers/task" },
                { text: "日志控制器", link: "/guides/controllers/log" },
              ]
            },
            {
              text: "模型",
              collapsed: false,
              items: [
                { text: "预设配置模型", link: "/guides/models/configuration" },
                { text: "导入任务模型", link: "/guides/models/task" },
                { text: "日志模型", link: "/guides/models/log" },
              ]
            },
            {
              text: "视图",
              collapsed: false,
              items: [
                { text: "公共模板", link: "/guides/views/common" },
                { text: "预设配置视图", link: "/guides/views/configuration" },
                { text: "导入任务视图", link: "/guides/views/task" },
                { text: "日志视图", link: "/guides/views/log" },
              ]
            },
            {
              text: "前端资源",
              collapsed: false,
              items: [
                { text: "全局JS", link: "/guides/frontend/bootstrap-js" },
                { text: "预设配置JS", link: "/guides/frontend/configuration-js" },
                { text: "导入任务JS", link: "/guides/frontend/task-js" },
                { text: "日志JS", link: "/guides/frontend/log-js" },
                { text: "CSS", link: "/guides/frontend/css" },
              ]
            }
          ],

        },
        {
          text: "其他资源",
          collapsed: false,
          items: [{ text: "常见问题", link: "/guides/faq" }],
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

    socialLinks: [{ icon: "github", link: "https://github.com/frank6com" }],
  },
});
