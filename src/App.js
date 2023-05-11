
import React from "react"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import {BrowserRouter,Routes,Route}from "react-router-dom";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login"element={<Home/>}></Route>
        {/* <Route index path="/"element={<Navbar/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;