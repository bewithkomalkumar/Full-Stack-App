import React from "react";
import { useState } from "react";

export let myContext = React.createContext();

const AppContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const [username, setUsername] = useState("");
  const toggleLoggedIn = () => {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  };
  const makeUserName = (name, data) => {
    setUsername(name);
    setUser(data);
  };
  const status = {
    isLoggedIn,
    username,
    user,
  };
  return (
    <myContext.Provider value={{ status, toggleLoggedIn, makeUserName }}>
      {children}
    </myContext.Provider>
  );
};
export default AppContext;
