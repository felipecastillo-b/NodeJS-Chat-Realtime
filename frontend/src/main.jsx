import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode> Para evitar que websocket perdia la conexion
    <App />
//  </React.StrictMode>,
)
