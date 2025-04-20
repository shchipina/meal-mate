import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes/routes.js'
import { App } from './App.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
        {/* <RouterProvider router={router} /> */}
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
