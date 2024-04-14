import React, { useEffect, useState } from "react";
import MenuImgOutline from '../assets/menu_image_header_outline.png'
import MenuImgFilled from '../assets/menu_image_header_filled.png'
import { Link } from "react-router-dom";
import linkedin from '../assets/linkedin.png'
import github_icon from '../assets/github.png'
import { Palette } from "../data";

function Header() {
    const [menu_open, setMenu_open] = useState(false)
    const [animate_menu, setAnimate_menu] = useState(false)


    return (
        <div className="w-3/4 h-fit flex flex-col justify-start items-end absolute top-0 py-6 select-none">
            <div className="w-full h-fit flex justify-between items-center z-10 ">
                <div className="flex justify-center">
                    <Link to={'/'} replace={false}>
                        <p
                            className={`w-full h-full text-3xl font-thin color-comp`}
                            style={{ fontFamily: 'fantasy', 
                            // color: Palette.complimentary 
                        }}
                        >
                            N
                        </p>
                    </Link>
                </div>
                <div className="w-fit flex ">
                    <a href="https://www.linkedin.com/in/nomaan-ahmed-dev/" target="_blank ">
                        <img className="w-6 cursor-pointer " src={linkedin} alt="menu-icon" />
                    </a>
                    <span className="px-2"> </span>
                    <a href="https://github.com/AhmadNomaan" target="_blank">
                        <img className="w-6 cursor-pointer " src={github_icon} alt="menu-icon" />
                    </a>
                </div>
                {/* <div className={` cursor-pointer w-fit duration-[10ms] ${animate_menu && 'animate-spin'}`} onClick={() => {
                    setMenu_open(!menu_open)
                    setAnimate_menu(true)
                    setTimeout(() => { setAnimate_menu(false) }, 1000)
                }}>
                    <img className="w-10" src={menu_open ? MenuImgFilled : MenuImgOutline} alt="menu-icon" />

                </div> */}
            </div>

        </div>
    )
}

export default Header;