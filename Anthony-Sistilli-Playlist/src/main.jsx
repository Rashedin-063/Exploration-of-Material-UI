import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { orange } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc',
      contrastText: '#fff',
    },
    secondary: {
      main: orange[500],
      contrastText: '#000',
    },
  },
  typography: {
  myVariant: {
      fontSize: '3rem',
      color: orange[500],
    fontWeight: '400',
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
