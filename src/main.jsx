import  ReactDOM  from 'react-dom/client'
import React from 'react'
import Store from './app/Store.js'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
    </React.StrictMode>
)
