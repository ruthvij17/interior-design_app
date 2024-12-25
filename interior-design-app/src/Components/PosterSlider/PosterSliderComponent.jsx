import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/PosterComponent";
import { NextArrow } from "../HeroCarousel/ArrowsComponent";
import { PrevArrow } from "../HeroCarousel/ArrowsComponent";
const PosterSliderComponent = (props) => {
  const { posters, title, subtitle, isDark } = props;

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3 className={`text-2xl font-bold text-white`}>{title}</h3>
        <p className={`text-sm text-white`}>{subtitle}</p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) => (
          <Poster {...each} idDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSliderComponent;
