
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HmePage'

function App() {


  return (
    <>
   <Routes>
   <Route path='/' element={<HomePage />}></Route>
   </Routes>
    </>
  )
}

export default App
