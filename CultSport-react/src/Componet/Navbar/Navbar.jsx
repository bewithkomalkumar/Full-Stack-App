import React from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { myContext } from "../../Context/AppContext";
function Navbar() {
  const { toggleLoggedIn, status, makeUserName } = useContext(myContext);

  const Logout = () => {
    localStorage.removeItem("loginToken");
    makeUserName("", {});
    toggleLoggedIn();
  };
  return (
    <div className="Navbar">
      <Link to="/">
        <img src="./product_page/10001.png" alt="image" />
      </Link>

      <Link to="Just_Launched">Just Launched</Link>
      <Link to="trademills">Trade Mills</Link>
      <Link to="spinbikes">Spin Bikes</Link>
      <Link to="cycles">Cycles</Link>

      {status.isLoggedIn ? (
        <>
          <p>
            <strong>Hi, </strong>
            {status.username}
          </p>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
          <button onClick={Logout}>Logout</button>
        </>
      ) : (
        <div>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/register"}>
            <button>Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
