import { createApp } from 'vue'
import App from './App.vue'

export function start(root = '#app', name = 'Jenny') {
  console.log('[LIBRARY1] Instantiating application')
  const app = createApp(App, { name })
  app.mount(root)
  console.log('[LIBRARY1] app =', app)

  return app
}
