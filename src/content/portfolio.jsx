import React from "react";
import "./content.css";
import AppBarMenu from "../Appbar";
import $ from 'jquery'; 
import "../../node_modules/flickity/dist/flickity.min.css";
import "../../node_modules/flickity/dist/flickity.pkgd.min.js";
import Cardport from "./portfolioStruct";
import {AnimatePresence,motion} from "framer-motion"; 


function Portfolio(){


    const PageTransition={
        in:{
            // opacity:1,
            x:0
        },
        out:{
            // opacity:0,
            x:"-100vw"
        }
    }

    
    return (<>
    <motion.div  
    initial="out"
    animate="in"
    exit="out"
    variants={PageTransition}
>
    <AppBarMenu title="I have created..."/>
    <Cardport />
    </motion.div>
    </>)
    
}


export default Portfolio;