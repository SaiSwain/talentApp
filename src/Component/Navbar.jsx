import React,{useState} from 'react'
import "./Navbar.css"
import { FaSistrix} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import Child from "./Child";
import {Link,NavLink,useNavigate}from "react-router-dom"
function Navbar() {
    const [serch, setserch] = useState(false)
    const[find, setfind] = useState(false)
    let navigate = useNavigate();
    const[items,setItems]=useState([]);
    const[inputList,setInputList]=useState("");
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
  return (
    <div>
      
      <h2>Get the <span className='heading'>Right Job</span> You Deserve</h2>
      <p>Your next career move starts here</p>
      <button  id="button" type="submit" onClick={increment}className='btn' style={{backgroundColor:serch ? "#c4fae8":"white"}}>Search Jobs</button>
      <button  type="submit" onClick={decrement}className='btn' style={{backgroundColor:find ? "#c4fae8":"white"}}>Search Candidates</button>
      <div className='container'>
        <div className='search-box1'>
        <FaSistrix className='search-icon'/><input type="search"id="one" className='send'placeholder='Skill/job roles'onChange={itemEvent}value={inputList}  />
        </div>
<div className='search-box2'>
<HiMapPin /><input type="search"className='send'id="two" placeholder='City'onChange={itemEvent}value={inputList}  />
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
      </div>
  )
}

export default Navbar;