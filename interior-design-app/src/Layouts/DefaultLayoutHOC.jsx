import React from "react";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import Appfooter from "../Components/Appfooter/AppfooterComponent";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavbarComponent />
        <Component {...props} />
        <Appfooter />
      </div>
    );
  };

export default DefaultLayout;
