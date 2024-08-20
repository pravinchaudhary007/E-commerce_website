import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './Components/cards/AppContext.jsx'
import AddcardContext from './Components/Navbar/AddcardContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <AddcardContext>
      <App />
   </AddcardContext>
    </AppContext>
  </React.StrictMode>
)
