import React, { useRef } from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { myContext } from "../../Context/AppContext";
import logo from "./10001.png";
function Navbar() {
  const { toggleLoggedIn, status, makeUserName } = useContext(myContext);
  const ref = useRef(null);

  const Logout = () => {
    localStorage.removeItem("loginToken");
    makeUserName("", {});
    toggleLoggedIn();
  };
  const handleHamberger = () => {
    if (ref.current.style.display == "none") {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  };
  return (
    <>
      <div className="Navbar">
        <button onClick={handleHamberger} className="hamburgerBtn">
          =
        </button>

        <Link to="/">
          <img src={logo} alt="image" />
        </Link>

        <Link to="Just_Launched" className="desktop">
          Just Launched
        </Link>
        <Link to="trademills" className="desktop">
          Trade Mills
        </Link>
        <Link to="spinbikes" className="desktop">
          Spin Bikes
        </Link>
        <Link to="cycles" className="desktop">
          Cycles
        </Link>

        {status.isLoggedIn ? (
          <>
            <p>
              <strong>Hi, </strong>
              {status.username}
            </p>
            <Link to="/cart">
              <p>Cart</p>
            </Link>
            <button
              onClick={Logout}
              style={{
                background: "#f83e47",
                border: "none",
                color: "white",
                padding: "5px 10px",
                margin: "2px",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <Link to={"/login"}>
              <button
                style={{
                  background: "#58ac00",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button
                style={{
                  background: "#5c2499",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  margin: "2px",
                  borderRadius: "5px",
                }}
              >
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="navrespnsive" ref={ref}>
        <Link to="Just_Launched">Just Launched</Link>
        <Link to="trademills">Trade Mills</Link>
        <Link to="spinbikes">Spin Bikes</Link>
        <Link to="cycles">Cycles</Link>
      </div>
    </>
  );
}

export default Navbar;
