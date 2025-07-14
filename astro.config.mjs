import { defineConfig } from 'astro/config'
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDefinitionList],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers
      }
    }
  },
  devToolbar: { enabled: false }
})
