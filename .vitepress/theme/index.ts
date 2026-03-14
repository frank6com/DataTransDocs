import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    giscusTalk({
      repo: 'Frank6com',
      repoId: 'R_kgDORdSF5g',
      category: 'Announcements',
      categoryId: 'DIC_kwDORdSF5s4C36lq',
      mapping: 'pathname',
      theme: 'preferred_color_scheme'
    }, {
      frontmatter,
      route
    })
  }
}
