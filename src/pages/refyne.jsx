import Header from "../components/header"


export default function Refyne (){
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Header />
            <div className="w-1/2 h-1/3 rounded-md flex flex-col justify-center">
                <p className="text-2xl font-medium">Welcome people from Refyne India.</p>
                <p className="text-base font-semibold">
                    I've created this page because I wanted to convey a message that the google form was not allowing.
                    <br />
                    I do not currently have any personal projects to share with you that might showcase my technical abilities. 
                    To be honest, all the work I've done has been in professional capacity pertaning to my current employment and due to contractual obligations, 
                    I'm not at liberty to share any parts of my work. I can however redirect you to <a className="text-[#7510F7]" href="https://pitchnhire.com"> this website</a> to give you an idea 
                    of the projects I'm working on.
                    <br />
                    I hope you can give me a fair chance to showcase my knowledge and skills.
                    <br />
                    Regards,
                    <br />
                    Nomaan Ahmed Qadri
                </p>
            </div>
        </div>
    )
}