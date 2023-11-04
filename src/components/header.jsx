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
                <div className={` cursor-pointer w-fit duration-[10ms] ${animate_menu && 'animate-spin'}`} onClick={() => {
                    setMenu_open(!menu_open)
                    setAnimate_menu(true)
                    setTimeout(() => { setAnimate_menu(false) }, 1000)
                }}>
                    <img className="w-10" src={menu_open ? MenuImgFilled : MenuImgOutline} alt="menu-icon" />

                </div>
                {/* <div className={`absolute right-0 md:mr-14 md:top-auto top-16 overflow-hidden flex md:flex-row flex-col justify-between ${menu_open ? 'menu-slide-in' : 'menu-slide-out '}`}>
                    <p className={`px-3 py-1 rounded-xl border-2 border-[#7510F7] hover:bg-[#7510F7] text-[#7510F7] hover:text-[#ffffff] cursor-pointer md:w-1/4 md:min-w-fit min-w-full`}>Home</p>
                    <p className={`px-3 py-1 rounded-xl border-2 border-[#7510F7] hover:bg-[#7510F7] text-[#7510F7] hover:text-[#ffffff] cursor-pointer md:w-1/4 md:min-w-fit min-w-full`}>Portfilio</p>
                    <p className={`px-3 py-1 rounded-xl border-2 border-[#7510F7] hover:bg-[#7510F7] text-[#7510F7] hover:text-[#ffffff] cursor-pointer md:w-1/4 md:min-w-fit min-w-full`}>Contact</p>
                </div> */}
            </div>

        </div>
    )
}

export default Header;