import React from "react"
import Avatar from '../assets/mf-avatar 1.png'
import Header from "../components/header"
import { useNavigate } from "react-router-dom"

export default function Home({ title }) {
    const navigate = useNavigate()
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Header />
            <div className="w-full h-full flex justify-center items-center">
                <div className="md:w-2/4 w-full md:h-2/6 h-3/4 flex md:flex-row flex-col-reverse md:justify-between items-center ">
                    <div className="w-4/6 h-full flex flex-col justify-evenly md:items-start items-center">
                        <p className="text-2xl font-normal ">
                            hi! I'm <span className="text-3xl font-extrabold text-[#7510F7] px-2 ">Nomaan</span>
                            <br />
                            I'm a <span className="font-bold ">Full Stack Developer</span> crafting user experiences that help put you on the map.
                        </p>
                        <div className=" flex md:flex-row justify-between flex-col w-1/2">
                            <div className="md:my-0 my-1 md:w-[45%] p-2.5 flex rounded-xl cursor-pointer 
                        text-[#7510F7] hover:text-slate-50 border-2 border-[#7510F7] hover:bg-[#7510F7]"

                            >
                                <p className="select-none font-bold w-full uppercase text-center h-full">Say Hi!</p>
                                {/* <p className="select-none font-bold w-full uppercase text-center h-full">Know More</p> */}
                            </div>
                            <div className="md:my-0 my-1 md:w-[45%] p-2.5 flex rounded-xl cursor-pointer text-[#7510F7] hover:text-slate-50 border-2 border-[#7510F7] hover:bg-[#7510F7]">
                                {/* <p className="select-none font-bold w-full uppercase text-center h-full">Say Hi!</p> */}
                                <p className="select-none font-bold w-full uppercase text-center h-full"
                                    onClick={()=>{
                                        navigate('/about', {replace: false})
                                    }}
                                >About</p>
                            </div>
                        </div>
                    </div>
                    <img className="w-48" src={Avatar} alt="Avatar" />
                </div>
            </div>
        </div>
    )
}