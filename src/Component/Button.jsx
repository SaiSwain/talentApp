import React from "react"
import "./Button.css"
import login from"./images/login.png"
const Button=()=>{
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
      
      <div className="cpe">
      <h5 type="text"placeholder="Email"className="pu">I'm an employer</h5>
      </div> 
   
     
      <div className="c6">
        <h5 className="jo">I'm a candidate</h5>
      </div>
      </form>
      <div className="c10">
          <input className="e9" placeholder="Log in to TrueTalent"></input>
        </div>
        </div>
    )
}
export default Button;