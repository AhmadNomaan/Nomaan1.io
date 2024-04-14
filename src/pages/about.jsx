import Header from "../components/header";
import Pill from '../components/pill';
import { skills } from '../data';
import Avatar from '../assets/instagram_avatar_formal_head.png'
import resume from '../assets/resume-updated.pdf'

export default function About() {
    return (
        <div className="w-full h-full flex justify-around items-center flex-col">
            <Header />
            <div className="h-fit w-4/5 flex flex-col justify-between items-center md:mt-40 mt-20     ">
                <div className="md:w-4/6 w-full h-fit flex md:flex-row flex-col justify-between items-center text-xl text-c-typo font-semibold">
                    <div className="w-2/3">
                        <p>
                            I’m a full stack developer, based in India, with more than 2 years of experience in building software products.
                            <br />
                            I build beautiful, interactive, responsive and highly optimized front-end along with robust, efficient and scalable back-end services.
                        </p>
                    </div>
                    <img className="w-1/4 my-3 scale-x-[-1]" src={Avatar} alt="Avatar" />
                </div>
            </div>
            <div className="w-3/5 flex flex-col items-center py-8 ">
                <p className="text-c-complimentary text-2xl font-extrabold ">Technologies I've worked with</p>
                <div className='flex flex-row justify-evenly py-2 wrap'>
                    {
                        skills.map((item) => {
                            return <Pill label={item} />
                        })
                    }
                </div>

            </div>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
            <div className="w-fit px-6 py-1 border-2 rounded-lg flex justify-center align-center bg-c-complimentary cursor-pointer animate-pop">
                    <p className="text-c-primary">
                        View Full Resume {'>'}
                    </p>
            </div>
                </a>
        </div>
    )
}