import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './index.css'
import { Layout } from './Layout'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Layout/>
  </HashRouter>
)
