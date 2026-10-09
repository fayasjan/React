import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Extra from './useReducer.jsx'
import Color from './UseREducer2.jsx'
import './index.css'
import UseCallback from './useCallback/useCallback.jsx'
import UseMemo from './UseMemo.jsx'

createRoot(document.getElementById('root')).render(
  <>
  {/* <Extra />
  <App />
  <Color /> */}
  {/* <UseCallback />  */}
  <UseMemo />

  </>
)
