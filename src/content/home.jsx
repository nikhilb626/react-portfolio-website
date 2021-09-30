import React,{useEffect} from "react";
import "./content.css";
import AppBarMenu from "../Appbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ScriptTag from "react-script-tag";
// import $ from 'jquery'; 
// import "../../node_modules/flickity/dist/flickity.min.css";
// import "../../node_modules/flickity/dist/flickity.pkgd.min.js";
import { Switch, Route, withRouter } from 'react-router-dom';
import Flickity from 'react-flickity-component';

import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonIcon from '@material-ui/icons/Person';
import BarChartIcon from '@material-ui/icons/BarChart';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AndroidIcon from '@material-ui/icons/Android';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {AnimatePresence,motion} from "framer-motion"; 


function Home(){


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




    const flickityOptions = {
        initialIndex: 0,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: true,
        autoPlay: 2500,
      pauseAutoPlayOnHover: false
        
    }
   


    return (<>
    <motion.div 
    initial="out"
    animate="in"
    exit="out"
    variants={PageTransition}
    >

    <AppBarMenu title="Introduction"/>
    <div className="profile_background">
        <div className="profile_container">
            <div className="profile_pic">
           <img src="./images/pic3.jpg" alt="here" />
            </div>
            <div className="profile_name">
                <h1>Nikhil Bhatt</h1>
            </div>
        </div>
    </div>

    <div className="about_container">
    <div className="about_heading_Container">
    <div className="about_logo"> <AccountCircleIcon className="logoUser" /></div>
       
        <div className="about_heading">About Me</div>
    </div>

    <div className="about_me">
        <p className="about_me_para">Passionate Full stack developer with 1 year experience. Recently focusing on  Reactjs framework</p>
        <p className="about_me_para" >My goal is to write clean, highest performance and test covered code in order to provide smooth and bugs free software. Back in days,  I was working a lot with vanilla javascript, JQuery, nodejs, mongodb and other  frontend and backend framework avialable out there</p>
        
    </div>    
</div>

<div className="carousel_info_container">

<Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      prevNextButtons={false}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
     <div className="carousel-cell">
         <div className="carousel_heading">
             <div className="personal_info_logo"><AccountCircleIcon className="Personal_logo" /></div>
             <div className="personal_info_heading">Personal Detail</div>
         </div>
         <div className="carousel_body">
             <div className="info_list_container">
            <div className="list_logo"><EventIcon /></div>
            <div className="list_items">
                <div className="list_heading">Date of birth</div>
                <div className="list_body">06/july/1998</div>
            </div>
             </div>
             <div className="info_list_container">
              <div className="list_logo"><PaymentIcon /></div>
              <div className="list_items">
                  <div className="list_heading">Nationality</div>
                  <div className="list_body">India</div>
              </div>   
             </div>
             <div className="info_list_container">
              <div className="list_logo"><PersonIcon /></div>
              <div className="list_items">
                  <div className="list_heading">Religion</div>
                  <div className="list_body">Hindu</div>
              </div>   
             </div>
             <div className="info_list_container">
               <div className="list_logo"><BarChartIcon /></div>
               <div className="list_items">
                   <div className="list_heading">Status</div>
                   <div className="list_body">Single</div>
               </div>  
             </div>
             <div className="info_list_container">
               <div className="list_logo"><RecordVoiceOverIcon /></div>
               <div className="list_items">
                   <div className="list_heading">Language</div>
                   <div className="list_body">Hindi & English</div>
               </div>  
             </div>
             
         </div>
     </div>

     <div className="carousel-cell">
     <div className="carousel_heading">
             <div className="personal_info_logo"><LocalLibraryIcon className="Personal_logo" /></div>
             <div className="personal_info_heading">Education Background</div>
         </div>
         <div className="carousel_body">  <div className="info_list_container">
            <div className="list_image"><img src="./images/gbpuat.png" alt="bbps" /></div>
            <div className="list_items2">
                <div className="list_heading2">B.sc in Food Sci & Tech</div>
                <div className="list_body2">GBPUAT Pantnagar </div>
                <div className="list_body2">2021</div>

            </div>
             </div>
             <div className="info_list_container">
              <div className="list_image"><img src="./images/rcd.png" alt="rcd" /></div>
              <div className="list_items2">
                  <div className="list_heading2">Inter school</div>
                  <div className="list_body2">R.C.D Public School, Shivrajpur</div>
                  <div className="list_body2">2016</div>

              </div>   
             </div>
             <div className="info_list_container">
              <div className="list_image"><img src="./images/bbps.png" alt="gbpuat" /></div>
              <div className="list_items2">
                  <div className="list_heading2">High School</div>
                  <div className="list_body2">Bal Bharati Public School, Motadhak</div>
                  <div className="list_body2">2014</div>

              </div>   
             </div></div>
     </div>



     <div className="carousel-cell">
     <div className="carousel_heading">
             <div className="personal_info_logo"><AndroidIcon className="Personal_logo" /></div>
             <div className="personal_info_heading">Coding Knowledge</div>
         </div>

    
         <div className="carousel_body">      
          <div className="info_list_container">
            <div className="list_logo interestIcon"  ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">HTML5, CSS3, Javascript,Nodejs</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body"> Jquery, Bootstrap, Express  Framework</div>
            </div>
             </div>


             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">AWS/ Heroku/ Netlify Web Deployment</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">React Framework & Material UI</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">Sass & Git/ Github</div>
            </div>
             </div>


             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">MongoDB/ Atlas/ Compass/ Mongoose</div>
            </div>
             </div>


             
           






        </div>


     </div>

     




     <div className="carousel-cell">
     <div className="carousel_heading">
             <div className="personal_info_logo"><DirectionsBikeIcon className="Personal_logo" /></div>
             <div className="personal_info_heading">Interest</div>
         </div>

    
         <div className="carousel_body">      
          <div className="info_list_container">
            <div className="list_logo interestIcon"  ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">Exploring new programming languages</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">playing guitar</div>
            </div>
             </div>


             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">creating apps for fun and self utility</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">Gaming</div>
            </div>
             </div>

             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">Space and science documentaries</div>
            </div>
             </div>


             <div className="info_list_container">
            <div className="list_logo interestIcon" ><ArrowForwardIcon /></div>
            <div className="list_items">
                <div className="list_body">Graphic designing</div>
            </div>
             </div>






        </div>


     </div>
    </Flickity>
</div>

</motion.div>

    </>
    
    );
}


export default withRouter(Home);