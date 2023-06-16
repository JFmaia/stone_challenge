import React from 'react'
import ReactDOM from 'react-dom/client'

//Css BASE 
import './main.css'

//Componente HOME
import {Home} from './views/Home/home'
import './views/Home/home.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
