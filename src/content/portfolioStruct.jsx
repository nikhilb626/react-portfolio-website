import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Flickity from 'react-flickity-component';





const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      background:"black",

    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      // width: "395px",
    
    },
  }));



function Cardport(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);

  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };



      const handleOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = () => {
        setOpen3(false);
      };


      const handleOpen4 = () => {
        setOpen4(true);
      };
    
      const handleClose4 = () => {
        setOpen4(false);
      };


      const handleOpen5 = () => {
        setOpen5(true);
      };
    
      const handleClose5 = () => {
        setOpen5(false);
      };


      const handleOpen6 = () => {
        setOpen6(true);
      };
    
      const handleClose6 = () => {
        setOpen6(false);
      };
    

    const flickityOptions = {
        initialIndex: 0,
        // prevNextButtons: false,
        wrapAround: true,
        autoPlay: false,
        
    }



    return (
        <>
<div className="portfolio_container">
<marquee className="myMarquee"><span className="marquee">Note-</span>please select the respective photo for more info.</marquee>



{/* card container starts */}
    <div className="card_container">



{/* card start 1 */}
    <div className="card_media">
        <div className="card_image">
            <img src="./images/p11.jpg" alt="main"  onClick={handleOpen} />
        </div>
        <div className="card_title">app landing page</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p12.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p13.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p14.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p15.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p16.jpg" alt="pic" /> </div>
  </div>
    </Flickity>



          </div>
        </Fade>
      </Modal>

{/* card ends 1*/}


{/* card start 2*/}
<div className="card_media">
        <div className="card_image">
            <img src="./images/p23.jpg" alt="main2"  onClick={handleOpen2} />
        </div>
        <div className="card_title">travel website</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p23.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p24.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p25.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p26.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p27.jpg" alt="pic" /> </div>
  </div>
    </Flickity>



          </div>
        </Fade>
      </Modal>
{/* card ends 2*/}



{/* card start 3*/}

<div className="card_media">
        <div className="card_image">
            <img src="./images/p31.jpg" alt="main"  onClick={handleOpen3} />
        </div>
        <div className="card_title">tacos & game landing page</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p31.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p32.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p34.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p35.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p36.jpg" alt="pic" /> </div>
  </div>
    </Flickity>



          </div>
        </Fade>
      </Modal>


{/* card ends 3*/}

{/* card start 4*/}

<div className="card_media">
        <div className="card_image">
            <img src="./images/p41.jpg" alt="main"  onClick={handleOpen4} />
        </div>
        <div className="card_title">plant selling website</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open4}
        onClose={handleClose4}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open4}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p42.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p43.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p44.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p45.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p46.jpg" alt="pic" /> </div>
  </div>
    </Flickity>



          </div>
        </Fade>
      </Modal>

{/* card ends 4*/}

{/* card starts 5 */}

<div className="card_media">
        <div className="card_image">
            <img src="./images/p51.jpg" alt="main"  onClick={handleOpen5} />
        </div>
        <div className="card_title">medical website</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open5}
        onClose={handleClose5}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open5}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p51.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p52.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p54.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p55.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p56.jpg" alt="pic" /> </div>
  </div>
    </Flickity>



          </div>
        </Fade>
      </Modal>

{/* card ends 5*/}

{/* card starts 6 */}

<div className="card_media">
        <div className="card_image">
            <img src="./images/p61.jpg" alt="main"  onClick={handleOpen6} />
        </div>
        <div className="card_title">makeup studio website</div>
    </div>

    <Modal
     
        className={classes.modal}
        open={open6}
        onClose={handleClose6}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open6}>
          <div className={classes.paper}>


          <Flickity
      className={'carouselp'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 <div class="carousel-cellp">
     <div className="carouselp_image"><img src="./images/p62.jpg" alt="pic" /> 
</div> </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p63.jpg" alt="pic" /> </div>
  </div>
  <div class="carousel-cellp">
      <div className="carouselp_image"><img src="./images/p64.jpg" alt="pic" /> </div>
  </div>
 

    </Flickity>



          </div>
        </Fade>
      </Modal>


{/* card ends 6 */}
   




 {/* card container ends */}
 </div>





</div>
</>
    );


  };




export default Cardport;