import { useState } from 'react'
import './App.css'
import './responsive.css'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Homepage from './homepage'
import Submitted from './components/submitted'
import Members from './components/members'
import Popup from './components/popup'

function App() {
  const [count, setCount] = useState(0)
  const [popup, setpopup] = useState(false)
  

  return (
    <div className="app">
      <Popup openpop={popup} closePopup={()=>setpopup(true)}/>
      <Navbar openpop_func={()=>{setpopup(false)}}/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/submitted' element={<Submitted/>}/>
        <Route path='/team' element={<Members/>}/>
      </Routes>
    </div>
  )
}

export default App
