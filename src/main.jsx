import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryclient = new QueryClient({})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <App />
  </QueryClientProvider>,
)
