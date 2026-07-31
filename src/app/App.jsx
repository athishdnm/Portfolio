import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Projects from '../pages/Projects'; 
import Contact from '../pages/Contact'; 

function App() {
  

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1 pt-16'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={< About />} />
                <Route path='/Projects' element={<Projects/>} />
                <Route path='/Contact' element={<Contact/>} />
            </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
