import Header from "../components/header";
import { employment_data } from "../data";
import pdf from '../assets/resume.pdf'
import resume_snapshot from '../assets/resume-snapshot.png'


export default function About() {


    const data = employment_data[0]


    return (
        <div className="w-full h-full flex justify-center items-start">
            <Header />
            <div className="h-5/6 w-full flex flex-col items-center translate-y-[10%]">
                
            </div>
        </div>
    )
}