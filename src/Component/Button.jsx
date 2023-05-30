import React from "react"
import { useMediaQuery } from 'react-responsive';
import "./Button.css"
import login from"./images/login.png"
import { BsPerson } from "react-icons/bs";
import {BsWindowDesktop} from "react-icons/bs";
import  can  from "./images/can.svg";
import emp from "./images/emp.svg";
import Doct from "./Doct";
import {Link,NavLink,useNavigate}from "react-router-dom"
const Button=()=>{
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  let navigate = useNavigate();
  let navbar1=()=>{
    navigate("/reg1")
    }
    let navbar2=()=>{
      navigate("/reg2")
      }
    return(
      <div>
      <header>
        <nav>
          {isDesktop && (
            <div class="co">
             	<div className='tr'>
             <span className="top-word"style={{fontSize:"bold"}}>TM</span>
              <span className="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
            }}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
             <table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
             	<tr><td><button className='login'>Login</button></td>
             	<td><button  className='Register'>Register</button></td></tr></table>
               </div></div>
          )}
          {isTablet && (
            <div class="co">
            	<div className='tr'>
              <span className="top-word"style={{fontSize:"bold"}}>TM</span>
              <span className="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
            }}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
           <table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
            <tr><td><button className='login'>Login</button></td>
            <td><button  className='Register'>Register</button></td></tr></table>
            </div></div>
          )}
        </nav>
      </header>

      <main>
        <section className="imagess" >
         
            {isMobile &&  <div><img src={login}className="i"></img>
   <h1 style={{marginTop:"400px",marginRight:"-0px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
   </div>
    }
            {isTablet && <div><img src={login}className="i"></img>
   <h1 style={{marginTop:"400px",marginRight:"-0px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
   </div>}
            {isDesktop && <div><img src={login}className="i"></img>
   <h1 style={{marginTop:"400px",marginRight:"-0px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
   </div>}
            
         
        </section>

        <section className="f1">
          <div id="mf">
            {isDesktop && (
              <>
             <div id="fbo"onClick={navbar1}>
      <img src={can}className="jo2"/>
       <p id="em2">I'm an employer</p>
        <p id="em1">I am here to find my next Job</p>
     </div>
     <div id="sbo"onClick={navbar2}>
   <img src={emp} className="bv"/>
     <p id="em2">I'm an employer</p>
     <p id="em1">I am here to look for job<br/> seeker</p>
   
     </div>
              </>
            )}
            {(isTablet || isMobile) && (
              <>
                <div id="fbo"onClick={navbar1}>
      <img src={can}className="jo2"/>
       <p id="em2">I'm an employer</p>
        <p id="em1">I am here to find my next Job</p>
     </div>
     <div id="sbo"onClick={navbar2}>
   <img src={emp} className="bv"/>
     <p id="em2">I'm an employer</p>
     <p id="em1">I am here to look for job<br/> seeker</p>
   
     </div>
              </>
            )}
          </div>

          <div id="mf">
            {isDesktop && (
              <>
                
              </>
            )}
            {(isTablet || isMobile) && (
              <>
             
              </>
            )}
          </div>
        </section>

        <section className="c101">
          <footer>
          <button className="e91" placeholder="Log in to TrueTalent">Log in to TrueTalent</button>
          </footer>
        </section>
      </main>
    </div>
  //       <div id="fer">
  //        <div className="co1">
  //     <div class="co">
	// 	<div className='tr'>
  //   <span className="top-word"style={{fontSize:"bold"}}>TM</span>
  //   <span className="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
	// }}className='la'>T</span>alent</span></span><p style={{marginLeft:"-590px",fontSize:'15px',marginTop:"-30px"}}>TT Essential</p><p  style={{marginLeft:"-350px",fontSize:'14px',marginTop:"-34px"}}>TT Gig</p>
	// <table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
	// 	<tr><td><button className='login'>Login</button></td>
	// 	<td><button  className='Register'>Register</button></td></tr></table>
	//   </div></div>
  //   <div className="imagess"><img src={login}className="i"></img>
  //   <h1 style={{marginTop:"400px",marginRight:"-0px",marginLeft:"-460px",fontSize:"25px"}}>Experience Hiring 2.0 with<span style={{color:"green"}}>TrueTalent</span> </h1>
  
  //   </div>
  //     <form className="f1">
  //       <div id="mf">
  //       <div id="fbo"onClick={navbar1}>
  //       <img src={can}className="jo2"/>
  //       <p id="em2">I'm an employer</p>
  //       <p id="em1">I am here to find my next Job</p>
  //    </div>
  //    <div id="sbo"onClick={navbar2}>
  //    <img src={emp} className="bv"/>
  //    <p id="em2">I'm an employer</p>
  //    <p id="em1">I am here to look for job<br/> seeker</p>
   
  //     </div></div>
  //     </form>
  //     <div className="c101">
  //         <button className="e91" placeholder="Log in to TrueTalent">Log in to TrueTalent</button>
  //       </div>
  //       </div></div>
    )
}
export default Button;
