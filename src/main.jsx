import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './layout/router.jsx'
import AdventureProvider from './Provider/AdventureProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdventureProvider>
      <ToastContainer position="top-center" autoClose="1000" />
      <RouterProvider router={router} />
    </AdventureProvider>
  </StrictMode>,
)
