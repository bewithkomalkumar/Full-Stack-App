import axios from "axios";
import React from "react";
import { useState } from "react";
// "name": "Mamta2",
//     "email": "Mamta@gmail.com",
//     "gender": "F",
//     "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/616.jpg",
//     "githubUsername": null,
//     "signinMethod": "on website",
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);

  const registerUser = (event) => {
    event.preventDefault();
    // console.log(name, gender, email, password);
    setBtn((prev) => true);
    axios
      .post("https://expensive-train-tuna.cyclic.app/auth/register", {
        name,
        email,
        gender,
        password,
        signinMethod: "on Website",
        image: "",
      })
      .then((res) => {
        alert("Registration Succesfull !");
        setBtn((prev) => false);
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(err.response.data.message);
        setBtn((prev) => false);
      });
  };
  return (
    <div className="RegisterPage">
      <h1>Registration Details</h1>
      <form className="RegistartionForm">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="Not prefer to say">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button
          onClick={registerUser}
          style={{
            backgroundColor: "#58ac00",
            border: "none",
            color: "white",
            marginTop: "10px",
            cursor: btn ? "not-allowed" : "pointer",
          }}
          disabled={btn}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
