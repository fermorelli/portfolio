import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Knowledge } from "./components/knowledge/Knowledge";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { Projects } from "./components/projects/Projects";
import { Loader } from "./components/loader/Loader";
import { useState, useEffect } from "react";


const App =  ()=>{

    const [loading, isLoading] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => isLoading(true), 3000);
        return () => {
          clearTimeout(timer);
        };
      }, []);

    return ( !loading ? <Loader /> :
        <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Projects></Projects>
        <Knowledge></Knowledge>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}

export default App;