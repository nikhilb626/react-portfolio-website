import React from "react";
import AppBarMenu from "../Appbar";
import $ from 'jquery'; 
import "../../node_modules/flickity/dist/flickity.min.css";
import "../../node_modules/flickity/dist/flickity.pkgd.min.js";

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from "@material-ui/core/Button";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {AnimatePresence,motion} from "framer-motion"; 


function Contact(){

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


  



    return (
    <>
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={PageTransition}
    >

    <AppBarMenu title="Contact Us" />
    
    <div className="contact_container">
        <div className="contact_background_container"></div>
        <div className="contact_main_container">
            <div className="contact_profile_image"><img src="./images/pic3.jpg" alt="p" /></div>
            <div className="contact_name">Nikhil Bhatt</div>

            <div className="main_inner">

                <div className="contact_list">
                    <div className="contact_logo email"><EmailIcon /></div>
                    <div className="contact_detail">
                        <div className="contact_naming">Email</div>
                        <div className="contact">nikhil.bhatt.000@gmail.com</div>
                    </div>
                </div>

                <div className="contact_list">
                    <div className="contact_logo call"><PhoneIcon /></div>
                    <div className="contact_detail">
                        <div className="contact_naming">Mobile</div>
                        <div className="contact">+91-6395706350</div>
                    </div>
                </div>



                <div className="contact_list">
                    <div className="contact_logo whatsapp"><WhatsAppIcon /></div>
                    <div className="contact_detail">
                        <div className="contact_naming">Whatsapp</div>
                        <div className="contact">+91-6395706350</div>
                    </div>
                </div>


                <div className="contact_list">
                    <div className="contact_logo location"><LocationOnIcon /></div>
                    <div className="contact_detail address">
                 city kotdwara, uttrakhand, india
                    </div>
                </div>



            </div>
        </div>




        <div className="touch">
            <div className="touch_heading">Get In Touch</div>

            <div className="touch_buttons_container">
                <a  className="btn linkedin" 
                style={{color:"white",backgroundColor:"blue",
                marginBottom:"14px",
             fontFamily: 'Changa',
                width:"65%", margin:"7px auto"}} href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BKIzI9Ik%2BTL%2BD%2BOGx7WftVg%3D%3D" target="_blank"
                ><LinkedInIcon /> Linkedin</a>
            
                <a variant="contained" className="btn instagram"
                   style={{color:"white",backgroundColor:"red",
                     fontFamily: 'Changa',
                   width:"65%", margin:"7px auto"}} href="https://www.instagram.com/nikhilbhatt41/" target="_blank"> <InstagramIcon /> Instagram</a>

            </div>
        </div>


    </div>
    </motion.div>
    </>
    )
}


export default Contact;