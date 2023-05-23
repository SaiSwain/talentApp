import React from "react"
import login from"./images/login.png"
const Doct=()=>{
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
        </div>
    )
}
export default Doct;