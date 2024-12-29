import React, { useState, createContext, useEffect } from "react";

const userContext = createContext();
const UserProvider = (props) => {
  let [user, setUser] = useState(null);
  const updateUser = (obj) => {
    setUser(obj);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <userContext.Provider value={{ user, updateUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };
