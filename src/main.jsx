import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Redux
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'

//Router
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:'Ja nemam ovaa strana',
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'products',
        element:<ProductsPage />
      },
      {
        path:'aboutus',
        element:<AboutUsPage />
      }
    ]
  }
])

//Provider Store
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
    
  </StrictMode>,
)
