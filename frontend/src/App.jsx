
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {


  return (
   <>
   <BrowserRouter>
   {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

    </Routes>
   </BrowserRouter>
   

   {/* <Home/> */}

   </>
  )
}

export default App
