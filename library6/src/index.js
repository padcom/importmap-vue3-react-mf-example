import { createApp } from 'vue'
import App from './App.vue'

console.log('[LIBRARY6] createApp.__stamp__', createApp.__stamp__)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export async function start(root = '#app', name = 'Jenny') {
  console.log('[LIBRARY6] Sleeping for 100 miliseconds to simulate await on async function call')
  await sleep(100)

  console.log('[LIBRARY6] Instantiating application')
  const app = createApp(App, { name }).provide('appName', 'appName=LIBRARY6')
  app.mount(root)
  console.log('[LIBRARY6] Initialization complete. app =', app)

  return app
}
