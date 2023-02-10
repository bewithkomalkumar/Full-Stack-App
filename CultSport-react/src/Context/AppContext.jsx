import React from "react";
import { useState } from "react";

export let myContext = React.createContext();

const AppContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const [user_id, setUser_id] = useState(null);
  const [username, setUsername] = useState("");
  const toggleLoggedIn = () => {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  };
  const makeUserName = (name, data) => {
    setUsername(name);
    setUser(data);
  };
  const changeTotal = (amt) => {
    setTotal((prev) => amt);
  };
  const changeUser_id = (data) => {
    setUser_id(data);
  };
  const status = {
    isLoggedIn,
    username,
    user,
    total,
  };
  return (
    <myContext.Provider
      value={{
        status,
        toggleLoggedIn,
        makeUserName,
        changeTotal,
        changeUser_id,
        user_id,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
export default AppContext;
