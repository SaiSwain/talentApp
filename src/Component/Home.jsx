import React from "react"
import "./Home.css";
import {GoTrashcan}from "react-icons/go";
const Home=()=>{
//   var sli = document.getElementById("myRange");
//   var output = document.getElementById("demo");
//     output.innerHTML = sli.value;
//     sli.oninput = function() {
//     output.innerHTML = this.value;
// }
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
          <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="sli" id="myRange"/>
          <p style={{marginLeft:"90px",marginTop:"1px"}}>Value: <span id="demo"></span></p>
        </div>
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
        </div>
  
     
    )
}
export default Home;