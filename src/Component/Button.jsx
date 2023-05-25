import React from "react"
import "./Button.css"
import login from"./images/login.png"
import { BsPerson } from "react-icons/bs";
import {BsWindowDesktop} from "react-icons/bs";
import  can  from "./images/can.svg";
import emp from "./images/emp.svg";
import Doct from "./Doct";
import {Link,NavLink,useNavigate}from "react-router-dom"
const Button=()=>{
  let navigate = useNavigate();
  let navbar1=()=>{
    navigate("/reg1")
    }
    let navbar2=()=>{
      navigate("/reg2")
      }
    return(
        <div>
         
      <div class="co">
		<div className='tr'>
    <span class="top-word"style={{fontSize:"bold"}}>TM</span>
    <span class="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
	}}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
	<table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
		<tr><td><button className='login'>Login</button></td>
		<td><button  className='Register'>Register</button></td></tr></table>
	  </div></div>
    <div className="imagess"><img src={login}className="i"></img>
    <h1 style={{marginTop:"400px",marginRight:"-900px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
    <input type="btn"className="batt" placeholder="Learn more about Truetalent"></input><h1 >sai</h1>
    </div>
      <form className="f1">
     <div className="c11"onClick={navbar1}>
      <p type="text"placeholder="Email"className="pu1"style={{marginLeft:"10px"}}>I'm an employer</p>
      <img src={emp} className="bv"/>
      <p style={{marginLeft:"-110px",marginTop:"200px",marginRight:"-190px",fontSize:"15px"}}id="hg">I am here to look for job<br/> seeker</p>
      </div> 
      <div className="c61"onClick={navbar2}>
        <p className="jo1">I'm a candidate</p>
        <img src={can}className="jo2"/>
        <p style={{marginRight:"-500px",marginLeft:"-20px",marginTop:"200px",fontSize:"15px"}}>I am here to find my next Job</p>
      </div>
      </form>
      <div className="c101">
          <input className="e91" placeholder="Log in to TrueTalent"></input>
        </div>
        </div>
    )
}
export default Button;