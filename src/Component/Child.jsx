import React from "react"
import {GoTrashcan}from "react-icons/go";
import "./Child.css"
const Child=(props)=>{
    return(
        <div className="main">
        <li className="sai1">{props.text}</li>
 <GoTrashcan className="sai"onClick={()=>{
props.onSelect(props.id)
}}/> 
</div>
    )
}
export default Child;