import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'

import UserProvider from './components/UserProvider'

import Pagination from './services/pagination'

axios.defaults.baseURL = "http://localhost:3001"

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <UserProvider>
    <Pagination>
      <App />
    </Pagination>
  </UserProvider>
  // </React.StrictMode>,
)
