import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function toursSlider(arr,num,itemClass) {
  var settings = {
    rtl:num%2===0 ? true :false,
    focusOnSelect:true,
    swipeToSlide:true,
    arrows:false,
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imgs = arr.map((item,i) =>{
    return(
      <div key={i}>
        <img src={item} alt="background_image" className={`${itemClass} background__image rounded-3 m-5 mx-auto`} style={{backgroundPosition:"contain",maxHeight:"400px"}}/>
      </div>
    )
  }) 
      
  return (
    <div className="position-relative">
      <Slider {...settings}>
        {imgs}
      </Slider>
    </div>
  );
}









