import { createApp } from 'vue'
import App from './App.vue'

export function start(root = '#app', name = 'Jenny') {
  console.log('[LIBRARY3] Instantiating application')
  const app = createApp(App, { name })
  app.mount(root)
  console.log('[LIBRARY3] app =', app)

  return app
}
