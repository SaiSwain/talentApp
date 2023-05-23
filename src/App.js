
import React from "react"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Slide from "./Component/Slide";
import Button from "./Component/Button";
import Doct from "./Component/Doct";
import Doct1 from "./Component/Doct1";
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
        <Route path="/reg1" element={<Doct/>}/>
        <Route path="/reg2" element={<Doct1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;