import { useEffect } from "react"

export default function CtaButton({ width, bgColor, textColor }) {


    return (
        <div className={`
        h-fit w-[${width}] 
        border-2 
        border-[${String(textColor)}] 
        hover:border-[${bgColor}] 
        p-2.5 flex rounded-xl cursor-pointer 
        bg-[${bgColor}] 
        hover:bg-[${textColor}] 
        text-[${textColor}] 
        hover:text-[${bgColor}] 
        `}>
            <p className="select-none font-bold w-full uppercase text-center h-full">Say Hi!</p>
        </div>
    )
}