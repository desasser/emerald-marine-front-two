import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'KnowledgeLight',
        'Raleway',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#DAA520'
      },
    },
    typography: {
      h1: {
        fontFamily: 'Noto Serif',
        fontSize: '3rem',
      },
      h2: {
        fontFamily: 'Noto Serif',
        fontSize: '2.5rem',
      },
      h3: {
        fontFamily: 'Noto Serif',
        fontSize: '2rem',
      },
      h4: {
        fontFamily: 'Abel'
      },
      h5: {
        fontFamily: 'Abel'
      },
      h6: {
        fontFamily: 'Abel'
      },
    }
  })

  export default theme