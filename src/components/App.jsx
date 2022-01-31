import React from "react"
import Home from "./Home";
import Resume from "./Resume";
import Sidebar from "./Sidebar";
import Portfolio from "./Portfolio"
import Socials from "./Socials";

function App(){
    const [scene, setScene] = React.useState(0);

    function selectScene (){
        if(scene === 1){
            return (<>
                <Resume />
            </>)    
        }else if(scene===2){
            return (<>
                <Portfolio />
            </>)
        }else {
            return(<>
                <Home cond={scene} />
            </>)
        }
    
    }
    
    return (
        <>
        {selectScene()}
        <Sidebar chooseScene={setScene} scene={scene} />
        <Socials />
        </>
    )
}

export default App;