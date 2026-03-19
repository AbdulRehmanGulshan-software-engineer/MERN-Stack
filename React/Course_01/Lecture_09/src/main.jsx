import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Form from './Form.jsx'
import ZodForm from './zodForm.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ZodForm/>
  </>
)
