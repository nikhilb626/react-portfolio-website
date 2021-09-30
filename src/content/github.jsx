import React from "react";
import "./content.css";
import AppBarMenu from "../Appbar";
import GitHubIcon from '@material-ui/icons/GitHub';
import Git from "./git";
import RepoData from "./gitData";
import {ToastContainer,toast} from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import {AnimatePresence,motion} from "framer-motion"; 




function Github(){



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


    const toasty=()=>{
        toast("31 Repositories Total",{position:"top-center"})
    }



    return (<>
    <motion.div  
     initial="out"
    animate="in"
    exit="out"
    variants={PageTransition}
    >


    <AppBarMenu title="Github Profile" />
            <ToastContainer/>
    <div className="github_container">

    <div className="github_profile">
        <div className="github_image_container">
            <div className="github_image"><img src="./images/pic.jpg" alt="profile" /> </div>
        </div>
        <div className="github_detail">
            <div className="user_id">(-Nikhilb626-)</div>
            
            <div className="profile_link">

                <div className="profile_icon"><GitHubIcon /></div>
                <div className="profile_view"><a href="https://github.com/nikhilb626" >VIEW PROFILE </a></div>
            </div>
            <div className="repo_detail" onClick={toasty}>Click for Repo Count</div>

        </div>
    </div>

    

    <div className="repo_list">
        <div className="repo_heading">Top 10 Repos Overview</div>
    
    {/* list item starts */}
    
    {
        RepoData.map((val)=>{
            return (
        <Git 
            repo={val.repo}
            type={val.type}
            link={val.link}
        />

            )
        })
    }
 

    {/* list item ends */}
    </div>
    </div>
    </motion.div>
   </> )
}


export default Github;