import React from 'react'
import ReactDOM from 'react-dom/client'

import { Hello } from './Hello.jsx'

export function start(root = document.getElementById('app'), name = 'Jenny') {
  if (!root) throw new Error('[LIBRARY2] error: no root')

  console.log('[LIBRARY2] Instantiating application')
  const app = ReactDOM.createRoot(root)
  app.render(React.createElement(Hello, { name }))
  console.log('[LIBRARY2] app =', app)

  return app
}
