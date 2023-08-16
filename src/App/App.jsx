import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SigIn from '../Components/Sigin'
import Home  from "../Components/Home";
export function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigIn />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
