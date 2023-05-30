import React,{useState,useEffect} from 'react'
import "./Navbar.css"
import { useMediaQuery } from 'react-responsive';
import { FaSistrix} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import talent from "./images/talent1.png";
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
import pop from "./images/pop.png";
import Child from "./Child";
import {Link,NavLink,useNavigate}from "react-router-dom"
function Navbar() {
	const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
    const [serch, setserch] = useState(false)
    const[find, setfind] = useState(false)
    let navigate = useNavigate();
    const[items,setItems]=useState([]);
    const[inputList,setInputList]=useState("");
	const [showPopup, setShowPopup] = useState(true);
	const [activeButton, setActiveButton] = useState(
    parseInt(localStorage.getItem('activeButton')) || 1
  );

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

	
  	const handleDelete = () => {
    // Perform deletion logic here
    // You can update the state or trigger an API call to delete the item

    // For simplicity, let's just hide the pop-up box after deletion
    setShowPopup(false);
  };

  useEffect(() => {
    // Automatically hide the pop-up box after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 30000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

    const itemEvent=(event)=>{
      setInputList(event.target.value);
    }
    const listOfItems=()=>{
      setItems((oldItems)=>{
        return[...oldItems,inputList]
      })
      setInputList("");
    }
    const deleteitem=(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index!==id;
        })
      })
    }
    let increment=()=> {
        setserch(!serch);
        setfind(false);
    }
    let  decrement=()=> {
        setfind(!find);
        setserch(false)
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
  return (




	
    <div className='mp1'>
	  <div className="co">
		<div className='tr'>
    <span class="top-word"style={{fontSize:"bold"}}>TM</span>
    <span class="bottom-word">true<span style={{fontSize:"25px"}}><span style={{fontSize: "25px"
	}}className='la'>T</span>alent</span></span><p id='pot1' style={{marginLeft:"-790px",fontSize:'15px',marginTop:"-30px",marginBottom:"-20px"}}><button onClick={() => handleClick(1)}style={{ borderBottom: activeButton === 1 ? '2px solid #14BC9A' : 'none'}}id='bv1'>TT Essential</button></p><p id='pot1' style={{marginLeft:"-550px",fontSize:'14px',marginTop:"-20px",marginBottom:"10px" }}><button onClick={() => handleClick(2)}style={{borderBottom: activeButton === 2 ? '2px solid #14BC9A' : 'none'}}id='bv2'>TT Gig</button></p>
	<table style={{marginLeft:"700px",marginBottom:"-0px",marginTop:"-31px"}}>
		<tr><td><button onClick={improve1}className='login'>Login</button></td>
		<td><button onClick={improve2} className='Register'>Register</button></td></tr></table>
	  </div></div>
	  <div id='mj'>
	  {activeButton === 1 && (
		<div id='hj1'>
      <h2>Get the <span className='heading'>Right Job</span> You Deserve</h2>
	  </div>
	   )}
	   {activeButton === 2 && (
		<div id='hj2'>
		 <h2>Get the <span className='heading'>Right </span> You Deserve</h2>
		 </div>
		  )}
		  </div>
      <p>Your next career move starts here</p>
	  <div className='bt'>
      <button  id="button" type="submit" onClick={increment}className='btn' style={{backgroundColor:serch ? "#14BC9A":"white"}}>Search Jobs</button>
      <button   type="submit" onClick={decrement}className='btn' style={{backgroundColor:find ? "#14BC9A":"white"}}>Search Candidates</button></div>
      <div className='containe'>
        <div className='search-box1'>
        <FaSistrix className='search-icon'/><input type="search"id="one" className='send'placeholder='Skill/job roles'onChange={itemEvent}value={inputList}  />
        </div>
<div className='search-box2'>
<HiMapPin /><input type="search"className='send'id="two" placeholder='City'onChange={itemEvent}value={inputList}  />
</div>

<button className='search'><span onClick={improve}>Serch</span>
</button>
</div><div className='head'>
  <h1 style={{marginLeft:"450px",fontSize:"30px"}}><span style={{color:"#14BC9A"}}>Trusted by</span> top-tier companies</h1></div>
  <div class="wrapper">
	<div class="cards_wrap">
		<div class="card_item">
			<div class="card_inner">
				<img src={actu}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={bim}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={cash}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={dro}className='img'/>
			
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={gro}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={khata}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={nex}className='img'/>
				
			</div>
		</div>
		<div class="card_item">
			<div class="card_inner">
				<img src={nob}className='img'/>
			
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={qd}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={repr}className='img'/>
			
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={rj}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={w}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={sul}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={sws}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={tv}className='img'/>
				
			</div>
		</div>
    <div class="card_item">
			<div class="card_inner">
				<img src={ve}className='img'/>
				
			</div>
		</div>
    {/* <div class="card_item">
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
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
				<img src="Spider_man.png"/>
				<div class="role_name">Spider Man</div>
				<div class="real_name">Tom Holland</div>
				<div class="film">Lorem
				tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
		</div> */}
	</div>
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
	  {showPopup && (
        <div className="popup-box">
			 <button style={{border:"none",backgroundColor:"none",fontSize:"25px",marginTop:"5px"}} onClick={handleDelete} className='d'>
            <i className="fas fa-trash-alt"></i> X
          </button>
		  <hr></hr>
       <div className='pop'>
		<div className='po'>
		<img src={pop}className='if'></img>
		</div>
		</div>
		<div style={{marginLeft:"950px"}}className='m1'>
		<button className='b1'>Register now</button>
		<button className='b2'>rules</button>
	   </div>
        </div>
      )}
      </div>
  )
}

export default Navbar;