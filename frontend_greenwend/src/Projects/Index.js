import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Main from './Pages/Main'
// import Home from './Pages/Home'
import About from "./Pages/About";
import { BrowserRouter , Routes , Route } from "react-router-dom";

const Index = () => {
  return (
    <div>    
        {/* <Footer /> */}

        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index