import React, { useState } from "react"
import Avatar from '../assets/instagram_avatar_formal.png'
import Header from "../components/header"
import { useNavigate } from "react-router-dom"
import { Palette } from "../data"

export default function Home({ title }) {
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    return (
        <>
            {
                 <div className={`absolute left-1/2 -translate-x-1/2 flex justify-center items-center text-white text-sm font-bold py-4 ${showAlert?'visible':'hidden'} ${showAlert? 'animate-bounce': ''}`}  role="alert">
                <p className="bg-c-complimentary px-4 py-2 rounded-2xl">Email copied to clipboard!</p>
            </div>
            }
            <div className="w-full h-full flex justify-center items-center">
                <Header />
                <div className="w-full h-full flex justify-center items-center">
                    <div className="md:w-2/4 w-full md:h-2/6 h-3/4 flex md:flex-row flex-col-reverse md:justify-between items-center ">
                        <div className="w-4/6 h-full flex flex-col justify-evenly md:items-start items-center">
                            <p className={`text-2xl font-normal text-c-typo`}>
                                Hi! I'm <span className={`text-3xl font-extrabold px-2 text-c-complimentary`}
                                >Nomaan</span>
                                <br />
                                I'm a <span className="font-bold  ">FullStack Developer</span> crafting user experiences that help put you on the map.
                            </p>
                            <div className=" flex md:flex-row justify-between flex-col w-1/2">
                                <div className={`md:my-0 my-1 md:w-[45%] px-2.5 py-1 flex rounded-xl cursor-pointer 
                                text-c-complimentary border-2 border-c-secondary bg-c-secondary hover:bg-c-primary`}
                                    onClick={() => {
                                        navigator.clipboard.writeText('nomaanahmad77@gmail.com')
                                        setShowAlert(true)
                                        setTimeout(()=>{setShowAlert(false)}, 1000 )
                                    }}>
                                    <p className="select-none font-bold w-full text-center h-full">
                                        {/* <a href="mailto:nomaanahmad77@gmail.com"> */}
                                        Say Hi!
                                        {/* </a> */}
                                    </p>

                                </div>
                                <div
                                    onClick={() => {
                                        navigate('/about', { replace: false })
                                    }}
                                    className={`md:my-0 my-1 md:w-[45%] px-2.5 py-1 flex rounded-xl cursor-pointer 
                                text-c-complimentary border-2 border-c-secondary bg-c-secondary hover:bg-c-primary`}>
                                    {/* <p className="select-none font-bold w-full uppercase text-center h-full">Say Hi!</p> */}
                                    <p className="select-none font-bold w-full text-center h-full">About</p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="a w-1/3"
                            src={Avatar}
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        </>

    )
}