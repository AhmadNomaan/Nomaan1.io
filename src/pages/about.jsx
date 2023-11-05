import express_icon from '../assets/expressjs.png';
import Avatar from '../assets/mf-avatar 1.png';
import mongo_icon from '../assets/mongo.png';
import nest_icon from '../assets/nestjs.png';
import node_icon from '../assets/nodejs.png';
import postgres_logo from '../assets/postgres.png';
import react_icon from '../assets/react.png';
import Header from "../components/header";


export default function About() {
    return (
        <div className="w-full h-full flex justify-between items-center flex-col">
            <Header />
            <div className="h-fit w-full md:w-3/4 flex flex-col justify-between items-center md:mt-40 mt-20     ">
                <div className="md:w-4/6 w-full h-fit flex md:flex-row flex-col justify-between items-center">
                    <img className="w-1/4 my-3" src={Avatar} alt="Avatar" />
                    <div className="w-2/3">
                        <p>
                            I’m a full stack developer, based in India, with more than 2 years of experience in building software products.
                            <br />
                            I build beautiful, interactive, responsive and highly optimized front-end along with robust, efficient and scalable back-end.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit md:h-2/5 bg-[#7510F7] flex flex-col items-center justify-around py-8 ">
                <p className="text-[#ffffff] text-2xl font-extrabold     ">My Tech Stack</p>
                <div className=" w-3/5 flex justify-between items-center flex-wrap     ">
                    <img className='w-24 m-2' src={react_icon} alt="react_logo" />
                    <img className='w-24 h-fit m-2' src={node_icon} alt="node_logo" />
                    <img className='w-24 m-2' src={express_icon} alt="express_logo" />
                    <img className='w-24 m-2' src={nest_icon} alt="nest_logo" />
                    <img className='w-24 m-2' src={mongo_icon} alt="mongo_logo" />
                    <img className='w-24 m-2' src={postgres_logo} alt="postgres_logo" />
                </div>
            </div>
        </div>
    )
}