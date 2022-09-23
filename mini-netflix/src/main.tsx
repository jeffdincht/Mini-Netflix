import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoviesProvider } from './context/MoviesProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesProvider>
    <App />
    </MoviesProvider>
  </React.StrictMode>
)
