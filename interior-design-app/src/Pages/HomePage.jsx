import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/DefaultLayoutHOC";
import HeroCarousel from "../Components/HeroCarousel/HeroCarouselComponent";
import PosterSlider from "../Components/PosterSlider/PosterSliderComponent";
import axios from "axios";

const HomePage = () => {
  const [availableDesign, setavailableDesign] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      const response = await axios.get("http://localhost:8080/api/design");
      setavailableDesign(response.data);
      // console.log(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("state data");
    console.log(availableDesign); // This will log the updated state
  }, [availableDesign]);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Design Available"
          subtitle="List of available designs"
          posters={availableDesign}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
