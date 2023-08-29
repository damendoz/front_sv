import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//import components
import SigIn from '../Components/Sigin';
import Register from "../Components/Register";
import Home from "../Components/Home";
import Advance from "../Components/Advance";


export function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/advance" element={<Advance />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
