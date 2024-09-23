import { createRoot } from 'react-dom/client'
import App, { store } from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>

);
