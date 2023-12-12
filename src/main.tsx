import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/tailwind.css'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider className='h-full'>
    <App />
  </NextUIProvider>
)
