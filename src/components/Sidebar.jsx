import React from "react";

function Sidebar(props){
    function handleClick(value){
        props.chooseScene(value);
    }
    return (
        <div className="sidebar-container">
           <p onClick={()=>{
               handleClick(0)
           }}> Home </p>
           <p onClick={()=>{
               handleClick(1)
           }}> Resume </p>  
           <p onClick={()=>{
               handleClick(2)
           }}> Portfolio </p>    
        </div>
    )
    
}

export default Sidebar;