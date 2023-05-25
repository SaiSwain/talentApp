import React,{useState} from "react"
import login from"./images/login.png"
import {FcGoogle } from "react-icons/fc";
import "./Doct.css"
const Doct=()=>{
        const [button1Color, setButton1Color] = useState(''); // State for Button 1 color
        const [button2Color, setButton2Color] = useState(''); // State for Button 2 color
        const [button1Checked, setButton1Checked] = useState(false); // State for Button 1 checkbox
        const [button2Checked, setButton2Checked] = useState(false); // State for Button 2 checkbox
      
        const handleButton1Click = () => {
          setButton1Color('#14BC9A'); // Change Button 1 color to green
          setButton2Color(''); // Reset Button 2 color
          setButton1Checked(true); // Check Button 1 checkbox
          setButton2Checked(false); // Uncheck Button 2 checkbox
        };
      
        const handleButton2Click = () => {
          setButton1Color(''); // Reset Button 1 color
          setButton2Color('#14BC9A'); // Change Button 2 color to blue
          setButton1Checked(false); // Uncheck Button 1 checkbox
          setButton2Checked(true); // Check Button 2 checkbox
        };
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
    <div id="ide"><h4>Create TrueTalent Account</h4></div>
    <div id="kh">
    <span><h6 id="span">I am a</h6><button style={{ backgroundColor: button1Color }} onClick={handleButton1Click}id="bt1">
      <input type="checkbox" checked={button1Checked} readOnly />Candidates
      </button>
      <button style={{ backgroundColor: button2Color }} onClick={handleButton2Click}id="bt2">
         <input type="checkbox" checked={button2Checked} readOnly />Employer
      </button></span><br/><br/>
      <div id="in1"><input type="text"placeholder="First Name"id="in0"></input>
      <input type="text"placeholder="Last Name"id="in2"></input></div><br/>
      <div id="in3"><input type="text"placeholder="Email Address"id="in4"></input></div><br/>
      <div id="in5"><input type="text"placeholder="Password"id="in6"></input>
      <input type="text"placeholder="Confirm Password"id="in7"></input>
      </div><br/>
      <div id="in8"><input type="checkbox"></input><label>I accept the True Talent.io<span style={{color:"#14BC9A"}}>Terms Of Use</span>&<span style={{color:"#14BC9A"}}>Privacy Policy</span></label></div><br/>
      <div id="in9"><button id="in10">Create Account</button></div><br></br>
      <div style={{ display: "flex", alignItems: "center", width: "125%" ,marginRight:"-300px",marginLeft:"-70px"}}>  
      <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
      <span style={{ margin: "10px 10px", color: "black" }}>OR</span>
      <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
      </div><br/>
      <div id="in11"><button id="in12"><FcGoogle className='google1'></FcGoogle>Continue With Google</button></div>
      </div>
        </div>
    )
}
export default Doct;