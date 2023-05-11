import React from "react"
import {GoTrashcan}from "react-icons/go";
import "./Child.css"
const Child=(props)=>{
    return(
<div className="main">
 <GoTrashcan onClick={()=>{
     props.onSelect(props.id)
     }}className="sa"/>
    <li className="sai1">{props.text}</li>
               
</div>
    )
}
export default Child;