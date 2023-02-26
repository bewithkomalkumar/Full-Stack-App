import React from "react";
import { Link } from "react-router-dom";
import loading from "../Loading_icon.gif";

function Card({ data }) {
  return (
    <div className="Container">
      {data.length == 0 ? (
        <img src={loading} alt="loading" style={{ width: "100%" }}></img>
      ) : (
        data.map((elem) => {
          return (
            <div key={elem._id}>
              <img src={elem.thumbnail} alt="aa" />
              <h3>{elem.cname}</h3>
              <p>{elem.title}</p>
              <div className="price">
                <p>₹{elem.price}</p>
                <p>₹{elem.strikePrice}</p>
                <p>{elem.discount} % off</p>
              </div>
              <Link to={`/productdetails/${elem._id}`}>
                <button style={{ cursor: "pointer" }}>View Product</button>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Card;
