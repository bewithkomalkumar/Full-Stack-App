import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { myContext } from "../Context/AppContext";
import loading from "../Componet/Loading_icon.gif";

function ProductDetails() {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(false);
  const { id } = useParams();
  const { status } = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {
    setData([]);
    axios
      .get(`https://expensive-train-tuna.cyclic.app/singleProduct/${id}`)
      .then((res) => {
        console.log(res);
        setData([res.data.data]);
      });
  }, []);

  const handleAddtocart = () => {
    if (!status.isLoggedIn) {
      navigate("/login");
    } else {
      setBtn((prev) => true);
      const token = localStorage.getItem("loginToken");
      if (token) {
        axios
          .patch(
            `https://expensive-train-tuna.cyclic.app/cart`,
            { productid: id },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            alert(res.data.message);
            setBtn((prev) => false);
          });
      }
    }
  };
  return (
    <div className="productDetailsContainer">
      {data.length == 0 ? (
        <img src={loading}></img>
      ) : (
        <>
          <div>
            {data.map((elem) => {
              return (
                <>
                  <img src={"/" + elem.img1 + ".jpg"} alt={elem.img1} />
                  <img src={"/" + elem.img3 + ".jpg"} alt={elem.img2} />
                  <img src={"/" + elem.img2 + ".jpg"} alt={elem.img3} />
                  <img src={"/" + elem.img4 + ".jpg"} alt={elem.img4} />
                  <img src={"/" + elem.img5 + ".jpg"} alt={elem.img5} />
                  {/* <img src={"/" + elem.img6 + ".jpg"} alt={elem.img6} /> */}
                </>
              );
            })}
          </div>
          <div className="sidebar">
            {data.map((elem) => {
              return (
                <>
                  <h3>{elem.cname}</h3>
                  <h2>{elem.title}</h2>
                  <div className="price" style={{ alignItems: "center" }}>
                    <p>
                      <strong style={{ color: "#ff3278", fontSize: "20px" }}>
                        ₹{elem.price}
                      </strong>
                    </p>
                    <p>₹{elem.strikePrice}</p>
                    <p
                      style={{
                        backgroundColor: "#f5a623",
                        color: "white",
                        padding: "5px",
                      }}
                    >
                      {elem.discount} % off
                    </p>
                  </div>
                  <p>{elem.desc}</p>
                  <ul>
                    {elem.DETAILS.map((el) => {
                      return <li>{el}</li>;
                    })}
                  </ul>

                  <button
                    style={{
                      backgroundColor: "#ff3278",
                      color: "white",
                      border: "none",
                      width: "100%",
                      height: "30px",
                      cursor: btn ? "not-allowed" : "pointer",
                    }}
                    disabled={btn}
                    onClick={handleAddtocart}
                  >
                    Add to Cart
                  </button>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
