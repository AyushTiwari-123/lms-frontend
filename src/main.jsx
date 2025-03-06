// component imports
import App from './App.jsx'
import store from './Redux/store.js';
// css imports
import './index.css'
// library imports
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {Toaster} from "react-hot-toast"


createRoot(document.getElementById('root')).render(
  // agr hmlog BrowserRouter apne App ko wrap kr lete h to react-router-dom ki sari capabilities App m aa jati h jisse hmlog routing bhoot easly kr lenge App m
  // Toaster : //isko add krege to popup aa jate h (react-hot-toast dependency)
  <Provider store={store}> 
  <BrowserRouter> 
    <App />
    
    <Toaster/>
  </BrowserRouter>
  </Provider>
)
