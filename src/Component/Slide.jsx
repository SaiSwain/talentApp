
import "./Slide.css"
import React, { useState } from 'react';
import login from"./images/login.png"
import {Link,NavLink,useNavigate}from "react-router-dom"

const Slide=()=>{
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let improve1=()=>{
    navigate("/job")
    }
    let improve2=()=>{
    navigate("/register")
    }   
  
    
   
  return(
    <div>
      <div class="co">
		<div className='tr'>
    <span class="top-word"style={{fontSize:"bold"}}>TM</span>
    <span class="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
	}}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
	<table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
		<tr><td><button onClick={improve1} className='login'>Login</button></td>
		<td><button onClick={improve2} className='Register'>Register</button></td></tr></table>
	  </div></div>
   <div className="imagess"><img src={login}className="i"></img>
    <h1 style={{marginTop:"400px",marginRight:"-900px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
    <input type="btn"className="batt" placeholder="Learn more about Truetalent"></input><h1 >sai</h1>
    </div>
 
    <div className="umb">
      <form className="f">
        <div className="c0">
          <h1 className="e3"style={{marginBottom:"100px",marginTop:"-600px"}}>Log in to TrueTalent</h1>
        </div>
      <div className="c1">
      <input type="text"placeholder="Email"className="pu"></input>
      </div> 
      <div className="c">
      <input type={showPassword ? 'text' : 'password'}placeholder="Password" className="in"/>
      <button onClick={togglePasswordVisibility}className="b">
        {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
      </button></div>
     <div className="c2">
      <input type="checkbox"className="che"></input>
      <label className="check">Remember Me</label>
      <label style={{color:"green"}}className="for">Forgot Password?</label>
     </div>
     <div className="c3">
      <button type="text"placeholder="Sign In"className="ban">Sign In</button>
      </div> 
      <div className="c4">
      <hr className="g"></hr>OR<hr className="k"></hr>
      </div>
      <div className="c5">
      <button type="text"placeholder="Email"className="cd">Continue With Google</button>
      </div> 
      <div className="c6">
        <h5 className="jo">(for Job Seekers only)</h5>
      </div>
      </form>
      <div className="c10">
          <input className="e9" placeholder="Log in to TrueTalent"></input>
        </div></div>
    </div>
  )
}
export default Slide;