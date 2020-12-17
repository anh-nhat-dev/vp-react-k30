import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

export default function Slider() {
  return (
    <SlickSlider {...settings}>
      <div className="carousel-item active">
        <img src="images/slide-1.png" alt="Vietpro Academy" />
      </div>
      <div className="carousel-item">
        <img src="images/slide-2.png" alt="Vietpro Academy" />
      </div>
      <div className="carousel-item">
        <img src="images/slide-3.png" alt="Vietpro Academy" />
      </div>
      <div className="carousel-item">
        <img src="images/slide-4.png" alt="Vietpro Academy" />
      </div>
      <div className="carousel-item">
        <img src="images/slide-5.png" alt="Vietpro Academy" />
      </div>
      <div className="carousel-item">
        <img src="images/slide-6.png" alt="Vietpro Academy" />
      </div>
    </SlickSlider>
  );
}
