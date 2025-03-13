//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/red">Red</NavLink>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
    </div>
    </>
  );
}

export default App
