import React,{useState} from "react"
import "./Home.css";
import {GoTrashcan}from "react-icons/go";
import talent from "./images/talent1.png";
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
const Home=()=>{
  const [value, setValue] = useState({ min: 0, max: 20 });
  const handleRangeChange = (value) => {
      setValue(value);
    };
    return(
        <div>
           <form className="form">
           <div className="header">
            <h6 className="pam">Filter Serch<span className="sam">clearall</span></h6>
          </div>
          <h6 className="loc">location</h6>
          <input className="input" type="text"placeholder="City"></input>
          <div className="container1">
           <div >
            <input type="checkbox" />
            <label>Mumbai, Maharashtra</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Bangalore, Karnataka</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>New Delhi, Delhi</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Kolkata, West Bengal</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Chennai, Tamil Nadu</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Pune, Maharashtra</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Indore, Madhya Pradesh</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Ahmedabad, Gujarat</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Bhubaneswar, Odisha</label>
          </div>
          <h6 className="loc">salary</h6>
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
         <h6>preferred Job Type</h6>
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
            <label>immidiate</label>
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
          <input className="input1" type="date"placeholder="City"></input>
          <input className="input1" type="date"placeholder="City"></input>
          </div>
           </form>
           <div className="count">
          <div className="row">
       {/* <---><---> */}

          <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img>
        <div className="h1"style={{marginBottom:"10px",marginRight:"0px"}}>5year experience in c++ Development </div>
      <div className="p"style={{marginTop:"2px",fontSize:"10px"}}>Full Time.5-10 Yrs</div>
      <div className="location"style={{marginTop:"2px",fontSize:"10px"}}><span style={{color:"skyblue"}}>bangalore,karnataka</span></div>
      <hr></hr>
      <div className="footer"></div>STIXIS Technologies</div>
      </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginBottom:"120px",marginRight:"40px"}}/></div>
        <div className="h1"style={{marginBottom:"0px",marginRight:"-40px"}}></div>
      <div className="p"style={{marginTop:"2px",fontSize:"0px"}}></div>
      <div className="location"style={{marginTop:"2px",fontSize:"0px"}}><span style={{color:"skyblue"}}>bangalore,karnataka</span></div>
      <hr></hr>
      <div className="footer">
      </div>
       </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img></div>
        <div className="h1"></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img></div>
        <div className="h1"></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
      
{/* <___></___> */}

       </div>
     <div className="row1">
<div className="half">

     <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px",marginBottom:"100px"}}></img></div>
        <div className="h1"style={{marginBottom:"10px",marginRight:"0px"}}></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img></div>
        <div className="h1"></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img></div>
        <div className="h1"></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
       <div className="card">
        <div className="image"><img src={talent}style={{height:"30px",marginRight:"80px"}}></img></div>
        <div className="h1"></div>
      <div className="p"></div>
      <div className="location"></div>
      <div className="footer">
      </div>
       </div>
       </div>


     </div>
      
        {/* <div class="wrapper">
	<div class="header">Avengers Responsive Cards UI Design</div>
	<div class="cards_wrap">
		<div class="card_item">
			<div class="card_inner">
				<img src="black_panther.png"/>
				<div class="role_name">Black Panther</div>
				<div class="real_name">Chadwick Boseman</div>
				<div class="film">Lorem ipsum dolor
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="doctor_strange.png"/>
				<div class="role_name">Doctor Strange</div>
				<div class="real_name">Benedict Cumberbatch</div>
				<div class="film">Lorem ipsum
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="black_widow.png"/>
				<div class="role_name">Black Widow</div>
				<div class="real_name">Scarlett Johansson</div>
				<div class="film">Lorem ipsum 
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem ipsum dolor
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="black_widow.png"/>
				<div class="role_name">Black Widow</div>
				<div class="real_name">Scarlett Johansson</div>
				<div class="film">Lorem ipsum dolor 
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="black_panther.png"/>
				<div class="role_name">Black Panther</div>
				<div class="real_name">Chadwick Boseman</div>
				<div class="film">Lorem ipsum 
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src="doctor_strange.png"/>
				<div class="role_name">Doctor Strange</div>
				<div class="real_name">Benedict Cumberbatch</div>
				<div class="film">Lorem 
				tempor incididunt aliqua.</div>
			</div>
		</div>
	</div>
</div>   */}

        </div>
      
      </div>

      
  
     
    )
}
export default Home;