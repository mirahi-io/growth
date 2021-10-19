import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import GoogleFonts from './components/GoogleFronts'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GoogleFonts
            hrefs={[
              'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Titillium+Web:wght@400;600;700;900&display=swap',
              'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700;900&display=swap',
            ]}
          />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
