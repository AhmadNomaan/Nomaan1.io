import React from "react"

function Home(props) {
    const [title, setTitle] = React.useState(0);
    setInterval(function () {
        if (title === 1) {
            setTitle(title - 1);
        } else if (title === 0) {
            setTitle(title + 1);
        }
    }, 3000)

    


    return (
        <div className="main">
            <div className="wrapper">
                <p>
                    Hi! <br />
                    I'm <span style={{ fontSize: "35px", fontWeight: "900" }}> Nomaan </span> <br />
                    Web <span key={title} className="fade" style={{ fontSize: "32px", fontWeight: "600", color: "green" }}>
                        <span style={{ display: title === 0 ? "" : "none" }}>Developer</span>
                        <span style={{ display: title === 0 ? "none" : "" }}>Designer</span>
                    </span>
                </p>
                
            </div>
        </div>
    )
}

export default Home;