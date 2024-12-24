import React from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayoutHOC";
import DesignHero from "../Components/HeroCarousel/DesignHeroComponent";

const DesignPage = () => {
  // retrieve the id from req.params.id and send it as a prop to DesignHero
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <DesignHero design_id={id} />
    </>
  );
};

export default DefaultLayout(DesignPage);
