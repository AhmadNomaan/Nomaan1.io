import React from "react";

function Sidebar(props){
    function handleClick(value){
        props.chooseScene(value);
    }

    const active = {
        width: "60%",
        borderRadius: "20px 0 0 20px"
    }

    return (
        <div className="sidebar-container">
           <p style={props.scene===0? active: null} onClick={()=>{
               handleClick(0)
           }}> Home </p>
           <p style={props.scene===1? active: null} onClick={()=>{
               handleClick(1)
           }}> Resume </p>  
           <p style={props.scene===2? active: null} onClick={()=>{
               handleClick(2)
           }}> Portfolio </p>    
        </div>
    )
    
}

export default Sidebar;