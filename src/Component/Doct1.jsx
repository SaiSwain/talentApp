import React,{useState} from "react";
import login from"./images/login.png"
import { FcGoogle } from "react-icons/fc";
import "./Doct1.css"
const Doct1=()=>{
    const [button1Checked, setButton1Checked] = useState(false); // State for Button 1 checkbox
  const [button1Color, setButton1Color] = useState(''); // State for Button 1 background color
  const [button1TextColor, setButton1TextColor] = useState(''); // State for Button 1 text color
  const [button1InputVisible, setButton1InputVisible] = useState(true); // State for Button 1 input visibility

  const [button2Checked, setButton2Checked] = useState(false); // State for Button 2 checkbox
  const [button2Color, setButton2Color] = useState(''); // State for Button 2 background color
  const [button2TextColor, setButton2TextColor] = useState(''); // State for Button 2 text color
  const [button2InputVisible, setButton2InputVisible] = useState(false); // State for Button 2 input visibility

  const handleButton1Click = () => {
    setButton1Checked(true); // Check Button 1 checkbox
    setButton1Color('#14BC9A '); // Change Button 1 background color to green
    setButton1TextColor('white'); // Change Button 1 text color to white
    setButton1InputVisible(true); // Show input for Button 1

    setButton2Checked(false); // Uncheck Button 2 checkbox
    setButton2Color(''); // Reset Button 2 background color
    setButton2TextColor(''); // Reset Button 2 text color
    setButton2InputVisible(false); // Hide input for Button 2
  };

  const handleButton2Click = () => {
    setButton1Checked(false); // Uncheck Button 1 checkbox
    setButton1Color(''); // Reset Button 1 background color
    setButton1TextColor(''); // Reset Button 1 text color
    setButton1InputVisible(false); // Hide input for Button 1

    setButton2Checked(true); // Check Button 2 checkbox
    setButton2Color('#14BC9A '); // Change Button 2 background color to blue
    setButton2TextColor('white'); // Change Button 2 text color to white
    setButton2InputVisible(true); // Show input for Button 2
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
    <h1 style={{marginTop:"400px",marginRight:"-0px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
    {/* <input type="btn"className="batt" placeholder="Learn more about Truetalent"></input><h1 >sai</h1> */}
    <div className="vf">
          <button className="vf1" placeholder="Log in to TrueTalent">Log in to TrueTalent</button>
        </div>
    </div>
    <div id="ide"><h4 id="enp">Create TrueTalent Account</h4></div>
      <div id="kh">
        <span><h6 id="span">I am a</h6><button style={{ backgroundColor: button1Color, color: button1TextColor }}  onClick={handleButton1Click} id="bt1">
          <input type="checkbox" checked={button1Checked} readOnly />Candidates
        </button>
       
          <button style={{ backgroundColor: button2Color, color: button2TextColor}} onClick={handleButton2Click} id="bt2">
            <input type="checkbox" checked={button2Checked} readOnly />Employer
          </button></span><br /><br />
          {button2InputVisible && <div>
        <div id="in1"><input type="text" placeholder="First Name" id="in0"></input>
          <input type="text" placeholder="Last Name" id="in2"></input></div><br />
        <div id="in3"><input type="text" placeholder="Business Email Address" id="in4"></input></div><br />
        <div id="in5"><input type="text" placeholder="Password" id="in6"></input>
          <input type="text" placeholder="Confirm Password" id="in7"></input>
        </div><br />
        <div id="in8"><h3 style={{fontSize:"20px"}}>Company Details</h3></div>
        <div id="iz1"><input type="text"placeholder="Company Name"id="iz2"></input></div><br/>
        <div id="iz3"><input type="text" placeholder="Password" id="iz4"></input>
          <input type="text" placeholder="Confirm Password" id="iz5"></input>
        </div>
        <div id="iz6">
                                <select id="iz7">
                                    <option value="">Select Company size</option>
                                    <option value="35000">MERN</option>
                                    <option value="34000">JAVA</option>
                                    <option value="33000">PYTHON</option>
                                    <option value="32000">SQL</option>
                                </select>
                            
                                <select id="iz8">
                                    <option value="">Select industry domain</option>
                                    <option value="35000">MERN</option>
                                    <option value="34000">JAVA</option>
                                    <option value="33000">PYTHON</option>
                                    <option value="32000">SQL</option>
                                </select>
                            </div>
  <div id="in8"><input type="checkbox"></input><label>I accept the True Talent.io<span style={{ color: "#14BC9A" }}>Terms Of Use</span>&<span style={{ color: "#14BC9A" }}>Privacy Policy</span></label></div><br />                     
        <div id="in9"><button id="in10">Create Account</button></div><br></br>
       </div>}
        {button1InputVisible && <div>
          <div id="in1"><input type="text" placeholder="First Name" id="in0"></input>
          <input type="text" placeholder="Last Name" id="in2"></input></div><br />
        <div id="in3"><input type="text" placeholder="Email Address" id="in4"></input></div><br />
        <div id="in5"><input type="text" placeholder="Password" id="in6"></input>
          <input type="text" placeholder="Confirm Password" id="in7"></input>
        </div><br />
        <div id="in8"><input type="checkbox"></input><label>I accept the True Talent.io<span style={{ color: "#14BC9A" }}>Terms Of Use</span>&<span style={{ color: "#14BC9A" }}>Privacy Policy</span></label></div><br />
        <div id="in9"><button id="in10">Create Account</button></div><br></br>
        <div style={{ display: "flex", alignItems: "center", width: "75%", marginRight: "0px", marginLeft: "-70px" }}>
          <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
          <span style={{ margin: "10px 10px", color: "black" }}>OR</span>
          <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
        </div><br />
        
        <div id="in11"><button id="in12"><FcGoogle className='google1'></FcGoogle>Continue With Google</button></div>
      
          </div>}
      </div>
     
        </div>
    )
}
export default Doct1