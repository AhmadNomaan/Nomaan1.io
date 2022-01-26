import React from "react";

function Socials (){
    return <div className="socials-wrapper">
        <p> <a href="https://www.linkedin.com/in/nomaan-ahmed-57762a1a4/" target="_blank"><i class="fab fa-linkedin-in"></i></a></p>
        <p onClick={()=>{
            window.location = 'mailto:nomaanahmad77@gmail.com'
        }}> <i class="far fa-envelope"></i></p>
        <p> <a href="https://github.com/AhmadNomaan" target="_blank"><i class="fab fa-github"></i></a></p>
    </div> 
}

export default Socials;