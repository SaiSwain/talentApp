import React from "react"
import "./Home.css";
import {GoTrashcan}from "react-icons/go";
const Home=(props)=>{
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
          </div>
           </form>
        </div>
   
     
    )
}
export default Home;