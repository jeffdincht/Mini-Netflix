import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MoviesProvider } from './context/MoviesProvider'
import { StorageProvider } from './context/StorageProvider'
import { LoginProvider } from './context/LoginProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StorageProvider>
      <LoginProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </LoginProvider>
    </StorageProvider>
  </React.StrictMode>
)
