import { createApp } from 'vue'
import App from './App.vue'

createApp.__stamp__ = 'library5'
console.log('[LIBRARY5] createApp.__stamp__', createApp.__stamp__)

export function start(root = '#app', name = 'Jenny') {
  console.log('[LIBRARY5] Instantiating application')
  const app = createApp(App, { name })
  app.mount(root)
  console.log('[LIBRARY5] app =', app)

  return app
}
