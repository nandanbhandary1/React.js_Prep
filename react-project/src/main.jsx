import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar'
import App from './App'
import UserCard from './components/UserCard'

createRoot(document.getElementById('root')).render(
  <UserCard />
)
