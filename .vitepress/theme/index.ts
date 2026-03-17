import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import { onMounted } from 'vue'
import strict from 'node:assert/strict'
import './style.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

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
    
    onMounted(() => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '.main',
        children: 'img:not(.logo):not(.no-zoom)',
        pswpModule: PhotoSwipe,
        padding: { top: 20, bottom: 20, left: 20, right: 20 },
        wheelToZoom: true,
        showHideAnimationType: 'zoom'
      })
      
      lightbox.on('itemData', (e) => {
        const itemData = e.itemData
        const element = itemData.element as HTMLImageElement
        
        if (element.tagName === 'IMG') {
          itemData.src = element.src
          itemData.w = element.naturalWidth
          itemData.h = element.naturalHeight
        }
      })
      
      lightbox.init()
    })
  }
}
