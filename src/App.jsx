
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HmePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import NotFound from './pages/NotFound.jsx'
import SignUp from './pages/SignUp.jsx'
import  Login from './pages/Login.jsx' 
import CourseList from './pages/Course/CourseList.jsx'
import Contact from './pages/Contact.jsx'
function App() {


  return (
    <>
   <Routes>
   <Route path='/' element={<HomePage />}></Route>
   <Route path='/about' element={<AboutUs/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/courses' element={<CourseList/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='*' element={<NotFound/>}></Route>
   </Routes>
    </>
  )
}

export default App
