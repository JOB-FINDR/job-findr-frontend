import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProviderWrapper } from './context/auth.context.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  <AuthProviderWrapper>
    <App />
    </AuthProviderWrapper>
  </BrowserRouter>,
)
