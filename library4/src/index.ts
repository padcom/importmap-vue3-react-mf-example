import React, { DOMElement } from 'react'
import ReactDOM from 'react-dom/client'

import { Hello } from './Hello.jsx'

export function start(root: HTMLElement | null = document.getElementById('app'), name = 'Jenny') {
  if (!root) throw new Error('[LIBRARY4] error: no root')

  console.log('[LIBRARY4] Instantiating application')
  const app = ReactDOM.createRoot(root)
  app.render(React.createElement(Hello, { name }))
  console.log('[LIBRARY4] app =', app)

  return app
}
