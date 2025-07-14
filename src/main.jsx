import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import { FavouriteProvider } from './context/FavouriteContext.jsx'
import { PokemonProvider } from './context/PokemonContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PokemonProvider>
      <FavouriteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavouriteProvider>
      </PokemonProvider>
    </AuthProvider>




  </StrictMode>,
)
