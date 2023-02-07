import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="Container">
      {data.map((elem) => {
        return (
          <div>
            <img src={elem.thumbnail} alt="aa" />
            <h3>{elem.cname}</h3>
            <p>{elem.title}</p>
            <div className="price">
              <p>₹{elem.price}</p>
              <p>₹{elem.strikePrice}</p>
              <p>{elem.discount} % off</p>
            </div>
            <Link to={`/productdetails/${elem._id}`}>
              <button>View Product</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
