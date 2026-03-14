<template>
  <div class="giscus-comment" v-if="enableComment"></div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue'
import { useData } from 'vitepress'

// 获取当前页面信息
const { page, theme } = useData()
// 是否启用评论（可通过页面 frontmatter 控制）
const enableComment = ref(true)

// 监听页面变化，重新加载 Giscus
const loadGiscus = () => {
  // 避免重复加载
  if (document.querySelector('script[src="https://giscus.app/client.js"]')) {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (iframe) iframe.contentWindow.postMessage({ type: 'setConfig', config: getGiscusConfig() }, '*')
    return
  }

  // 创建 Giscus 脚本
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'Frank6com/') // 替换为你的仓库
  script.setAttribute('data-repo-id', 'R_kgDORdSF5g') // Giscus 官网生成的 repo-id
  script.setAttribute('data-category', 'Announcements') // 你的 Discussions 分类
  script.setAttribute('data-category-id', 'DIC_kwDORdSF5s4C36lq') // Giscus 官网生成的 category-id
  script.setAttribute('data-mapping', 'pathname') // 评论与页面的映射方式
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'light') // 主题，可结合 VitePress 暗黑模式适配
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  // 挂载脚本到评论容器
  document.querySelector('.giscus-comment').appendChild(script)
}

// 获取 Giscus 配置（适配动态主题）
const getGiscusConfig = () => ({
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
})

// 页面加载时初始化
onMounted(() => {
  // 可通过页面 frontmatter 关闭评论：--- comment: false ---
  enableComment.value = page.value.frontmatter.comment !== false
  if (enableComment.value) loadGiscus()
  
  // 监听暗黑模式切换，更新评论区主题
  watch(
    () => document.documentElement.classList.contains('dark'),
    (isDark) => {
      const iframe = document.querySelector('iframe.giscus-frame')
      if (iframe) {
        iframe.contentWindow.postMessage(
          { type: 'setConfig', config: { theme: isDark ? 'dark' : 'light' } },
          '*'
        )
      }
    }
  )
})
</script>

<style scoped>
.giscus-comment {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>