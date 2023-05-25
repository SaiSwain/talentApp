import { GoogleLogin } from 'react-google-login';
import "./Slide.css"
import { AiOutlineMail } from "react-icons/ai";
import {FcGoogle } from "react-icons/fc";
import { AiOutlineLock } from "react-icons/ai";
import React, { useState,useHistory } from 'react';
import login from"./images/login.png"
import {Link,NavLink,useNavigate}from "react-router-dom"
const Slide=()=>{
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
    const handleGoogleSignIn = (response) => {
      console.log(response);
      // Handle the sign-in response here
    };
   
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
    <div id="sat">
      <div class="co">
		<div className='tr'>
    <span class="top-word"style={{fontSize:"bold"}}>TM</span>
    <span class="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
	}}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
	<table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
		<tr><td><button onClick={improve1} className='login'>Login</button></td>
		<td><button onClick={improve2} className='Register'>Register</button></td></tr></table>
	  </div></div>
    <div id="umb">
   <div className="imagess"><img src={login}className="i"></img>   </div>
    <h1 style={{marginTop:"400px",marginRight:"-1210px",marginLeft:"-150px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"#14BC9A"}}>TrueTalent</span> </h1>
    <input type="btn"className="batt" placeholder="Learn more about Truetalent"></input><h1 >sai</h1>
    <div className="c10">
          <button className="e9" >Learn more about TrueTalent</button>
        </div>
 
    </div>
   
      <form className="f">
        <div className="c0">
          <h1 className="e3"style={{marginBottom:"100px",marginTop:"-530px",marginRight:"-50px",marginLeft:"-5px",fontSize:"20px"}}>Log in to TrueTalent</h1>
        </div>
      <div className="c1">
     <span><input type="text"placeholder="Email"className="pu"></input><AiOutlineMail className='fg'></AiOutlineMail></span>
      </div> 
      <div className="c">
    <input type={showPassword ? 'text' : 'password'}placeholder="Password" className="in"/> 
      <button onClick={togglePasswordVisibility}className="b">
        {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
      </button> <AiOutlineLock id='lo'></AiOutlineLock></div>
     <div className="c2">
      <input type="checkbox"className="che"></input>
      <label className="check">Remember Me</label>
      <label style={{color:"green"}}className="for">Forgot Password?</label>
     </div>
     <div className="c3">
      <button type="text"placeholder="Sign In"className="ban">Sign In</button>
      </div> 
      <div className="c4">
      <h6 className="hg1">-------------------------------------------OR--------------------------------------------</h6>
      </div>
      <div className="c5">
      <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      onSuccess={handleGoogleSignIn}
      onFailure={handleGoogleSignIn}
      render={renderProps => (
        <button type="text"placeholder="Email"className="cd"onClick={renderProps.onClick}disabled={renderProps.disabled}><FcGoogle className='google'></FcGoogle>
      
        Continue With Google</button>
        // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
        //   Sign in with Google
        // </button>
      )}
    />
  
      </div> 
      <div className="c6">
        <p className="jo">(for Job Seekers only)</p>
      </div>
      </form>
      
    </div>
  )
}
export default Slide;