import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/counterContext.jsx'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
