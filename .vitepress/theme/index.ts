import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import strict from 'node:assert/strict'
import './style.css'

export default {
  ...DefaultTheme,
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    giscusTalk({
      repo: 'frank6com/DataTransDocs',
      repoId: 'R_kgDORdSF5g',
      category: 'General',
      categoryId: 'DIC_kwDORdSF5s4C36lr',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'dark_tritanopia',
      lang: 'zh-CN',
      loading: 'lazy',
      crossorigin: 'anonymous',
      async: true,
    }, {
      frontmatter,
      route
    })
  }
}
