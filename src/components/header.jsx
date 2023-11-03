import React, { useEffect, useState } from "react";
import LogoImg from '../assets/sample-signiture.png'
import MenuImgOutline from '../assets/menu_image_header_outline.png'
import MenuImgFilled from '../assets/menu_image_header_filled.png'

function Header() {
    const [menu_open, setMenu_open] = useState(false)
    const [animate_menu, setAnimate_menu] = useState(false)


    return (
        <div className="w-3/4 h-fit flex flex-col justify-start items-end absolute top-0 py-6 select-none">
            <div className="w-full h-fit flex justify-between items-center z-10 ">
                <div className="flex justify-center">
                    <p className="w-full h-full text-4xl -rotate-12" style={{ fontFamily: 'Mrs Saint Delafield' }}>Nomaan Dev</p>
                    {/* <img className="w-2/4" src={LogoImg} alt="main-logo" /> */}
                </div>
                <div className={` cursor-pointer w-fit ${animate_menu && 'animate-ping duration-75'}`} onClick={() => {
                    setMenu_open(!menu_open)
                    setAnimate_menu(true)
                    setTimeout(() => { setAnimate_menu(false) }, 1000)
                }}>
                    <img className="w-10" src={menu_open ? MenuImgOutline : MenuImgFilled} alt="menu-icon" />
                </div>
            </div>
            <div className={`w-1/6 backdrop-blur-lg bg-[#ffffff97] flex flex-col ${!menu_open ? 'show-header-menu': 'hide-header-menu'} `}>
                <p>Home</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Header;