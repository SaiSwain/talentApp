import React,{useState} from "react"
import DatePicker from 'react-datepicker';
import { MdCalendarViewDay } from "react-icons/md";
import 'react-datepicker/dist/react-datepicker.css';
import { IoAppsSharp} from "react-icons/io5";
import "./Home.css";
import {FcCalendar } from "react-icons/fc";
import photo from"./images/sa.jpeg";
import talent from "./images/talent1.png";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { FaSistrix} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import {RxBorderSplit } from "react-icons/rx";
import Child from "./Child";
import { RxComponent2 } from "react-icons/rx";
import {useNavigate}from "react-router-dom"
import actu from "./images/actu.png";
import bim from "./images/bim.png";
import cash from "./images/cash.png";
import dro from "./images/dro.png";

import gro from "./images/gro.jpg";
import khata from "./images/khata.png";
import nex from "./images/nex.png";
import nob from "./images/nob.png";
import qd from "./images/qd.png";
import repr from "./images/repr.png";
import rj from "./images/rj.jpg";
import sa from "./images/sa.jpeg";
import sul from "./images/sul.png";
import sws from "./images/sws.png";
import tv from "./images/tv.png";
import ve from "./images/ve.png";
import w from "./images/w.jpg";
import jo from "./images/jo.png";
import hr from "./images/hr.jpg";
import be from "./images/be.png";
const Home=()=>{
  const [value, setValue] = useState({ min: 0, max: 20 });
  let navigate = useNavigate();
  const[items,setItems]=useState([]);
  const[inputList,setInputList]=useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 const [showCheckboxes, setShowCheckboxes] = useState(true);
  const [displayText, setDisplayText] = useState(false);

  const handleCheckboxButtonClick = () => {
    setShowCheckboxes(true);
    setDisplayText(false);
  };

  const handleTextButtonClick = () => {
    setShowCheckboxes(false);
    setDisplayText(true);
  };


  // const [showCheckboxes, setShowCheckboxes] = useState(true);
  // const [displayText, setDisplayText] = useState(false);

  // const handleButtonClick = () => {
  //   if (showCheckboxes) {
  //     setShowCheckboxes(false);
  //     setDisplayText(true);
  //   } else {
  //     setShowCheckboxes(true);
  //     setDisplayText(false);
  //   }
  // };
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // const[input,setInput]=useState([]);
  const handleRangeChange = (value) => {
      setValue(value);
    };
    const itemEvent=(event)=>{
  setInputList(event.target.checked?event.target.value:"");
    }
    // const itemEven=(event)=>{
    //   setInputList(event.target.value);
    // }
    const handleInputDelete = () => {
      setInputList('');
    };
    const listOfItems=()=>{
      setItems((oldItems)=>{
        return[...oldItems,inputList]
      })
      //  setInputList("");
    }
    // const listOfItem=()=>{
    //   setItems((oldItems)=>{
    //     return[...oldItems,input]
    //   })
    //   //  setInputList("");
    // }
    const deleteitem=(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index!==id;
        })
      })
    }
   
    let improve=()=>{
      navigate("/job/search")
    }
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
	}}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
	<table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}><tr><td><button onClick={improve1} className='login'>Login</button></td><td><button onClick={improve2} className='Register'>Register</button></td></tr></table>
	  </div></div>
          <div className="phot "><img src={photo}className="image"></img></div>
 <div className='container'>
        <div className='search-box1'>
    <FaSistrix className='search-icon'/><input type="search"id="one" className='send'onChange={itemEvent}placeholder='Skill/job roles'></input>
        </div>
<div className='search-box2'>
<HiMapPin /><input type="search"className='send'id="two" placeholder='City'onChange={itemEvent}value={inputList} />
</div>

<button className='search'onClick={listOfItems}><span onClick={improve}>Serch</span>
</button>
</div>
<ol>        
        {
          items.map((itemval,index)=>{
            return(
              <Child key={index}id={index}text={itemval}onSelect={deleteitem}/>
            ) 
          })         
        }
      </ol>
           <form className="form">     
           <div className="header">
            <h6 className="pam">Filter Search<span className="sam">Clearall</span></h6>
          </div>
          <h6 className="loc">Location</h6>
          <input className="input" type="text"placeholder="City"></input>
          <div className="container1">
           <div >
            <input type="checkbox"onChange={itemEvent}value="Mumbai, Maharashtra"checked={inputList==="Mumbai, Maharashtra"}/>
            <label value="Mumbai, Maharashtra">Mumbai, Maharashtra</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Bangalore, Karnataka"checked={inputList==="Bangalore, Karnataka"} />
            <label value="Bangalore, Karnataka">Bangalore, Karnataka</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="New Delhi, Delhi"checked={inputList==="New Delhi, Delhi"} />
            <label>New Delhi, Delhi</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Kolkata, West Bengal"checked={inputList==="Kolkata, West Bengal"}  />
            <label>Kolkata, West Bengal</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Chennai, Tamil Nadu"checked={inputList==="Chennai, Tamil Nadu"}  />
            <label>Chennai, Tamil Nadu</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Pune, Maharashtra"checked={inputList==="Pune, Maharashtra"} />
            <label>Pune, Maharashtra</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Indore, Madhya Pradesh"checked={inputList==="Indore, Madhya Pradesh"} />
            <label>Indore, Madhya Pradesh</label>
          </div>
          <div>
            <input type="checkbox" onChange={itemEvent}value="Ahmedabad, Gujarat"checked={inputList==="Ahmedabad, Gujarat"} />
            <label>Ahmedabad, Gujarat</label>
          </div>
          <div>
            <input type="checkbox"onChange={itemEvent}value="Bhubaneswar, Odisha"checked={inputList==="Bhubaneswar, Odisha"} />
            <label>Bhubaneswar, Odisha</label>
          </div>
          <h6 className="loc">Salary</h6>
          <div>
            <input type="checkbox"/>
            <label>Rs 2Lac-5Lac</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Rs 5Lac-10Lac</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Rs 10Lac-20Lac</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Rs 20Lac-40Lac</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Rs 40Lac+</label>
          </div>
         <h6>Preferred Job Type</h6>
         <div>
            <input type="checkbox"/>
            <label>Ful Time</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Direct Contract</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Contract to Hire</label>
          </div>
         <h6>Joining Preferences</h6>
         <div>
            <input type="checkbox"/>
            <label>Immidiate</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>2 Weeks</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>1 Month</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>2 Month</label>
          </div>
          <h6>Work Authorization</h6>
          <div>
            <input type="checkbox"/>
            <label>Required</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Not Required</label>
          </div>
          <h6>Job Duration</h6>
          <div>
            <input type="checkbox"/>
            <label>Contract 3 Months</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Contract 6 Months</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Contract 1 Year</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Permanent</label>
          </div>
          <h6>Salary Types</h6>
          <div>
            <input type="checkbox"/>
            <label>Annual</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Monthly</label>
          </div>
          <h6>Industry Domain</h6>
          <input className="input1" type="text"placeholder="City"></input>
          <div>
            <input type="checkbox"/>
            <label>Technology</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Education</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Hospitality</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Healthcare</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Engineering and Construction</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Banking</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Finance</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Automotive</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Telecom</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Monthly</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Chemical</label>
          </div>
          <h6>Experience</h6>
          <InputRange
          maxValue={20}
        minValue={0}
         value={value}
          onChange={handleRangeChange}
          />
        <p className='range'>{value.min}years</p>
          <p className='rangeOne'>{value.max}+years</p>
          <h6 className="slid">Travel Required
          <span style={{marginLeft:"70px"}}><label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
          </label></span></h6>
          <h6 className="slid">Equal Opertunity Employer<span style={{marginLeft:"40px"}}><label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
          </label></span></h6>
          <h6>Job posted between</h6>
     <span><DatePicker  className="date1"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          
        /><FcCalendar className="cal"></FcCalendar></span>
        
     
        <DatePicker className="date2"
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
          </div>
           </form>
           
          
           <div className="count" >
           <div>
        
            <div className="v">
           <h4 className="he">Search result</h4><p className="p">Sort by:</p><h6 className="h">Newest First
           </h6> <IoAppsSharp onClick={handleCheckboxButtonClick}className="bg1">Show</IoAppsSharp>
      <MdCalendarViewDay onClick={handleTextButtonClick}className="bg2">Hide</MdCalendarViewDay></div>
      {showCheckboxes && (
             
        <div className="wrappe">  
	<div className="cards_wra">
		<div class="card_ite">
			<div className="card_inne">
				<img src={tv}className="im"/>
				<div className="role_nam">UNITY DEVELOPER</div>
				<div className="real_nam">Full Time 0.6-1Yrs</div>
				<div className="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Chennai,TamilNadu
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"70px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={actu}className="im"/>
				<div class="role_nam">Microsoft Project Online</div>
				<div class="real_nam">Full Time 5-9Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={bim}className="im"/>
				<div class="role_nam">Project Engineer</div>
				<div class="real_nam">Full Time 2-5Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bangalore,Karnataka </div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software</p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={cash}className="im"/>
				<div class="role_nam">C++ Developers</div>
				<div class="real_nam">Ful Time 2-3Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={dro}className="im"/>
				<div class="role_nam">SharePoint lead</div>
				<div class="real_nam">Ful Time 6-15Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Surat,Gujurat
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={gro}className="im"/>
				<div class="role_nam">CASA Officer</div>
				<div class="real_nam">Ful Time 0-1Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Mumbai,Maharastra 
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={khata}className="im"/>
				<div class="role_nam">Telecaller</div>
				<div class="real_nam">Ful Time 0-1Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={nex}className="im"/>
				<div class="role_nam">Marketing Manager</div>
				<div class="real_nam">Ful Time 3-5Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={nob}className="im"/>
				<div class="role_nam">Angular Developer</div>
				<div class="real_nam">Contract-to-Hire 4.5-10Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Hyderabad,Telengana 
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={qd}className="im"/>
				<div class="role_nam">Python Developer</div>
				<div class="real_nam">Full Time 3-8Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bhubaneswar,Odisha
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={repr}className="im"/>
				<div class="role_nam">HR Team Leader</div>
				<div class="real_nam">Ful Time 1-2Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bangalore,Karnakaka
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={rj}className="im"/>
				<div class="role_nam">Senier Java Developer</div>
				<div class="real_nam">Ful Time 1-2Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Hyderabad,Telengana
			</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={sul}className="im"/>
				<div class="role_nam">React Mobile Developer</div>
				<div class="real_nam">Contract-to-Hire 3-10Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bhubaneswar,Odisha
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={sws}className="im"/>
				<div class="role_nam">Node Js Developer</div>
				<div class="real_nam">Full Time 4-6Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India
			</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={tv}className="im"/>
				<div class="role_nam">Java Developer</div>
				<div class="real_nam">Full Time 5-7Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Mumbai,Maharastra
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={ve}className="im"/>
				<div class="role_nam">Maniframe Developer</div>
				<div class="real_nam">Contract-to-Hire 5-7Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Ahmedbad,Gujarat
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"70px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={w}className="im"/>
				<div class="role_nam">Database Adminstrator</div>
				<div class="real_nam">Full Time 5-6Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Hyderabad,Telengana
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Field Sales Executive</div>
				<div class="real_nam">Full Time 2-6Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Coimbatore,TamilNadu
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={tv}className="im"/>
				<div class="role_nam">Senior Business Analyst</div>
				<div class="real_nam">Contract-to-Hire 5-7Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Mohali,Punjab
		.</div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={sws}className="im"/>
				<div class="role_nam">Full Stack Developer</div>
				<div class="real_nam">Full Time 3-5Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Delhi,Delhi,Hyderabad
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={w}className="im"/>
				<div class="role_nam">Sosial Media Influencer</div>
				<div class="real_nam">Full Time 2-4Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bhubaneswar,Odisha
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={ve}className="im"/>
				<div class="role_nam">BTB Developers</div>
				<div class="real_nam">Full Time 2-10Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bangalore,Karnataka
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={sws}className="im"/>
				<div class="role_nam">Branch Head</div>
				<div class="real_nam">Full Time 10-15Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India
			.</div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={w}className="im"/>
				<div class="role_nam">Technical Lead</div>
				<div class="real_nam">Full Time 5-6Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={ve}className="im"/>
				<div class="role_nam">Sales Executive</div>
				<div class="real_nam">Full Time 5-7Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Mumbai,Maharastra
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={be}className="im"/>
				<div class="role_nam">SharePoint Lead</div>
				<div class="real_nam">Full Time 6-15Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={jo}className="im"/>
				<div class="role_nam">Shopify Developer</div>
				<div class="real_nam">Full Time 1-5Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bangalore,Karnataka
	.</div>
  <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={hr}className="im"/>
				<div class="role_nam">Field Sales Executive</div>
				<div class="real_nam">Full Time 2-6Yrs</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bhubaneswar,Odisha
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
	</div>
</div>  
           )}
 {displayText && <div style={{marginTop:"40px",marginLeft:"40px"}}>
 
  <tr style={{}}>
    <th>jobs</th>
    <th>skills</th>
    <th>location</th>
    <th>company</th>
    <th>job type</th>
    <th>Experience</th>
  </tr>
  
  <hr ></hr>
<tr >
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  <hr></hr>
  <tr className="tab">
    <td>IT Application Delivery Consultant</td>
    <td>GCP, Hadoop, HDFS, Hive, Java, Python</td>
    <td>Chennai, Tamil Nadu</td>
    <td>Tekwissen Software Pvt Ltd</td>
    <td>Full Time</td>
    <td>8-15 Yrs</td>
  </tr>
  
 
  </div>}
</div>
        </div>
      </div>
    )
                     
}
export default Home;