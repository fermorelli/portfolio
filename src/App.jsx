import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Knowledge } from "./components/knowledge/Knowledge";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { Projects } from "./components/projects/Projects";
import { Loader } from "./components/loader/Loader";
import { useState, useEffect } from "react";
import {BsToggleOn, BsToggleOff} from 'react-icons/bs';
import { DesignerProjects } from "./components/designer/designer";


const App =  ()=>{

    const [loading, isLoading] = useState(false);
    const [lan, setLan] = useState(true);
    const [isOn, setIsOn] = useState(true);

    const changeLan = ()=>{
      setLan(!lan)
      setIsOn(!isOn)
    }

    useEffect(() => {
        let timer = setTimeout(() => isLoading(true), 3000);
        return () => {
          clearTimeout(timer);
        };
      }, []);

    return ( !loading ? <Loader /> :
        <>
        <div>
        {!isOn ? <div className="language-toggle">
                  <span>English</span>
                  <BsToggleOn onClick={()=>{changeLan()}}/>
                  <span>Español</span>
                </div> :
                <div className="language-toggle">
                  <span>English</span>
                  <BsToggleOff onClick={()=>{changeLan()}}/>
                  <span>Español</span>
                </div>
                }
        </div>
        <Header lan={lan ? 'eng' : 'es'}></Header>
        <Nav></Nav>
        <About lan={lan ? 'eng' : 'es'}></About>
        <Projects lan={lan ? 'eng' : 'es'}></Projects>
        <DesignerProjects lan={lan ? 'eng' : 'es'}></DesignerProjects>
        <Knowledge lan={lan ? 'eng' : 'es'}></Knowledge>
        <Contact lan={lan ? 'eng' : 'es'}></Contact>
        <Footer lan={lan ? 'eng' : 'es'}></Footer>
        </>
    )
}

export default App;