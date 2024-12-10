import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { appRouter } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { StatsProvider } from './contexts/StatsContexts.jsx'

createRoot(document.getElementById('root')).render(
  <StatsProvider> 
     <RouterProvider router={appRouter}/>
  </StatsProvider>


)