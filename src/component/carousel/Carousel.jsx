import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Caruselcard from './carouselCard/Caruselcard';
import "./carouselCard/carusel.css"

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Carousell = () => {
  return (
   <>
     <Slider {...settings}>
         
                 <Caruselcard />
                 <Caruselcard />
                 <Caruselcard />
                 <Caruselcard />
                 <Caruselcard />
                 <Caruselcard />
                 <Caruselcard />
            
        
     </Slider>
   </>
  )
}

export default Carousell