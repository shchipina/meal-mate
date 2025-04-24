import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { router } from './routes/routes.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {router}
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
