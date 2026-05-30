import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export function render(initialLocale = 'pt-BR') {
  const app = createSSRApp(App, { initialLocale })

  return renderToString(app)
}
