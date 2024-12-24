import React, { createContext, useState } from "react";

export const DesignContext = createContext();

const DesignProvider = ({ children }) => {
  const [design, setDesign] = useState({
    title: "Modern Interior",
    imageUrl: "https://example.com/design.jpg",
    description: "A sleek and modern interior design example.",
    ratings: "4.5/5",
  });

  return (
    <DesignContext.Provider value={{ design }}>
      {children}
    </DesignContext.Provider>
  );
};

export default DesignProvider;
