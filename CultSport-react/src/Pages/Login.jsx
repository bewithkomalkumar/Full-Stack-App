import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { myContext } from "../Context/AppContext";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toggleLoggedIn, makeUserName, changeUser_id } = useContext(myContext);
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("loginToken");

    if (token) {
      axios
        .get("https://expensive-train-tuna.cyclic.app/auth/getLoggedIn", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.message === "Login Sucessfull") {
            //localStorage.setItem("loginToken", res.data.token);
            console.log(res);
            makeUserName(res.data.data.name, res.data.data);
            changeUser_id(res.data.data._id);
            toggleLoggedIn();
            // navigate(-1);
          } else {
            alert(res.data.message);
          }
        });
    }
  }, []);

  const checkLogin = (event) => {
    event.preventDefault();
    // console.log(email, password);
    setBtn((prev) => true);
    axios
      .post("https://expensive-train-tuna.cyclic.app/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Login Sucessfull") {
          localStorage.setItem("loginToken", res.data.token);
          makeUserName(res.data.data.name, res.data.data);
          changeUser_id(res.data.data._id);
          setBtn((prev) => false);
          toggleLoggedIn();
          // navigate(-1);
        } else {
          alert(res.data.message);
          setBtn((prev) => false);
        }
      });
  };
  return (
    <div className="RegisterPage">
      <h1>Login Page</h1>
      <form className="RegistartionForm">
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={checkLogin}
          style={{
            backgroundColor: "#58ac00",
            border: "none",
            color: "white",
            marginTop: "10px",
            cursor: btn ? "not-allowed" : "pointer",
          }}
          disabled={btn}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
