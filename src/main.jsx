import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { GlobalcontextProvider } from './context.jsx/Globalcontext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <GlobalcontextProvider>
      <App />
      <ToastContainer/>
      
    </GlobalcontextProvider>
  </BrowserRouter>

  </StrictMode>
)
