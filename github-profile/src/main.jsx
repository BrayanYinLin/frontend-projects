import { createRoot } from 'react-dom/client'
import App from './components/App'
import './index.css'

const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <App />
  </>
)
