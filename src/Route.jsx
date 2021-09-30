import React,{useEffect} from "react";
import Home from "./content/home";
import Portfolio from "./content/portfolio";
// import Service from "./content/service";
import Github from "./content/github";
import Contact from "./content/contact";
import {Route,Switch,useHistory,useLocation} from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion"; 
import ScrollToTop from "./content/scrollToTop";


function Routing(){
    let location=useLocation();



    let history=useHistory();

    useEffect(()=>{
        return history.push("/")
    },[])



    return (
    <>

    <AnimatePresence exitBeforeEnter>
    <ScrollToTop>
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact component={()=><Home />}/>
    <Route path="/portfolio" component={()=><Portfolio/>}/>
    {/* <Route path="/services" component={()=><Service/>}/> */}
    <Route path="/github" component={()=><Github/>}/>
    <Route path="/contact" component={()=><Contact/>}/>

    </Switch>

    </ScrollToTop>
    
    </AnimatePresence>
    </>
    )
}


export default Routing;