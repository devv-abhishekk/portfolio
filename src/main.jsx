import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global_styles.css'
import App from './app'
import { ThemeProvider } from './contexts/theme_provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
