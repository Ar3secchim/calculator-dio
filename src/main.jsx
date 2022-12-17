import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Home/App'
import { GlobalStyle } from './Global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
