import React, { useState, createContext, useEffect } from "react";

const userContext = createContext();
const UserProvider = (props) => {
  let [user, setUser] = useState(null);
  let url = "http://localhost:8080";
  let admin = 12;
  const updateUser = (obj) => {
    setUser(obj);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <userContext.Provider value={{ user, updateUser, admin, url }}>
      {props.children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };
