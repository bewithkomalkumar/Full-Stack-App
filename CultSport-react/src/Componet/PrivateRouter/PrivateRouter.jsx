import React from "react";
import { useContext } from "react";
import { myContext } from "../../Context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRouter = (props) => {
  const navigate = useNavigate();
  const { status } = useContext(myContext);
  if (!status.isLoggedIn) {
    return props.children;
  }
  return <Navigate to="/"></Navigate>;
};
export default PrivateRouter;
