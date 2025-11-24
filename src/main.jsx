import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import AppRouter from './routes/AppRouter'
import AuthProvider from './contex/AuthProvider/AuthProvider'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={AppRouter} />
    </AuthProvider>
    </Provider>
  </StrictMode>,
)
