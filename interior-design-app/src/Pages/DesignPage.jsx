import React from "react";
import DefaultLayout from "../Layouts/DefaultLayoutHOC";
import DesignHero from "../Components/HeroCarousel/DesignHeroComponent";

const DesignPage = () => {
  return (
    <>
      <DesignHero />
    </>
  );
};

export default DefaultLayout(DesignPage);
