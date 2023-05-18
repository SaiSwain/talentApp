import React,{useState,useRef,useEffect} from "react"
import {Calendar}from "react-date-range"
import format from "date-fns/format"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Home.css";
import photo from"./images/sa.jpeg";
import {GoTrashcan}from "react-icons/go";
import talent from "./images/talent1.png";
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { FaSistrix} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import {RxBorderSplit } from "react-icons/rx";
import Child from "./Child";
import { RxComponent2 } from "react-icons/rx";
import {Link,NavLink,useNavigate}from "react-router-dom"

const Home=()=>{
  const [value, setValue] = useState({ min: 0, max: 20 });
  let navigate = useNavigate();
  const[items,setItems]=useState([]);
  const[inputList,setInputList]=useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
 const [showCheckboxes, setShowCheckboxes] = useState(false);
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
    return(
        <div>
   
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
         
        <DatePicker  className="date1"
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
     
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
           <h4 className="he">Search result</h4><p className="p">Sort by:</p><h6 className="h">Newest First</h6> <RxComponent2 onClick={handleCheckboxButtonClick}className="bg1">Show</RxComponent2>
      <RxBorderSplit onClick={handleTextButtonClick}className="bg2">Hide</RxBorderSplit></div>
      {showCheckboxes && (
             
        <div class="wrappe">  
	<div class="cards_wra">
		<div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">UNITY DEVELOPER</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Chennai,TamilNadu
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"70px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Microsoft Project Online</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Bangalore,Karnataka </div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software</p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Surat,Gujurat
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Mumbai,Maharastra 
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>India,India
				</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
		<div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Pune,Maharastra</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem 
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem 
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem 
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem 
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem 
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem   
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"70px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
		.</div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
				.</div>
        <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
			.</div>
      <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
	.</div>
  <hr></hr><br></br>
       <div> <p style={{fontSize:"10px",marginRight:"60px",fontWeight:"bold"}}>Tekwissen Software </p></div>
			</div>
		</div>
    <div class="card_ite">
			<div class="card_inne">
				<img src={talent}className="im"/>
				<div class="role_nam">Black Panther</div>
				<div class="real_nam">Chadwick Boseman</div>
				<div class="fil"style={{color:"hwb(202 8% 7%)"}}><HiMapPin/>Lorem ipsum dolor
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