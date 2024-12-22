import React from "react";
import DefaultLayout from "../Layouts/DefaultLayoutHOC";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComponent";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
    </>
  );
};

export default DefaultLayout(HomePage);
