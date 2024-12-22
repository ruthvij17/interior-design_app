import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./ArrowsComponent";

const HeroCarousel = () => {
  const [images] = useState([
    {
      link: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    },
    {
      link: "https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg",
    },
    {
      link: "https://cityfurnish.com/blog/wp-content/uploads/2023/09/modren-room-home-interior-design-min.jpg",
    },
    {
      link: "https://5.imimg.com/data5/SELLER/Default/2022/10/SJ/QU/BV/29206063/best-home-interior-design.jpg",
    },
    {
      link: "https://interiorjumbo.com/blog/wp-content/uploads/2018/07/maxresdefault-1.jpg",
    },
  ]);

  const settingsLG = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settings = {
    ...settingsLG, // Same as settingsLG for this example
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`${image.link}`}
                alt="Hero banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`${image.link}`}
                alt="Hero banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
