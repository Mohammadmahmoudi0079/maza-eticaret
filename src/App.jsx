import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </div>
      )
}

export default App
