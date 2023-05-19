
import React from "react"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Slide from "./Component/Slide";
import Button from "./Component/Button";
import {BrowserRouter,Routes,Route}from "react-router-dom";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/job/search"element={<Home/>}></Route> */}
        <Route index path="/"element={<Navbar/>}></Route>
        <Route path="/job/search" element={<Home/>}/>
        <Route path="/job" element={<Slide/>}/>
        <Route path="/register" element={<Button/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;