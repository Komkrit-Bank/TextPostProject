import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoute from './MyRoute.js'
import './index.css'
import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyRoute />
  </React.StrictMode>
)
