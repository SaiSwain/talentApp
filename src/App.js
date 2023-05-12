
import React from "react"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Com from "./Component/Com";
import {BrowserRouter,Routes,Route}from "react-router-dom";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/job/search"element={<Home/>}></Route>
        {/* <Route index path="/"element={<Navbar/>}></Route> */}
        <Route path="/job/search" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;