import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { orange, red, blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      contrastText: '#fff',
    },
    secondary: {
      main: orange[500],
      contrastText: '#000',
    },
    myCustomColor: {
      main: red[600],
      superDark: red[900],
      superLight: red[300],
    }
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
