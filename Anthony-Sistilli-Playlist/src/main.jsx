import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { orange, red, blue, yellow } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[600],
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: orange[500],
//       contrastText: '#000',
//     },
//     myCustomColor: {
//       main: red[600],
//       superDark: red[900],
//       superLight: red[300],
//     }
//   },
//   typography: {
//   myVariant: {
//       fontSize: '3rem',
//       color: orange[500],
//     fontWeight: '400',
//     }
//   }
// })

const theme = createTheme({
  spacing: 15,
  palette: {
    mode: 'light',
    primary: {
      main: orange[500]
    },
    secondary: {
      main: yellow[500]
    },
    customRibRed: {
      main: red[500],
      superDark: red[700],
      superLight: red[300]
    }
  },
  typography: {
    h6: {
      fontSize: '2rem',
      fontWeight: '800'
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
