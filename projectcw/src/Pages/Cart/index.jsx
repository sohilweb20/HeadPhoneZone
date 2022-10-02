import React from "react";
import { axios } from "axios";
import { useState, useEffect } from "react";
import Pagelayout from "../../PageLayout";
import "./Cart.css";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(`http://localhost:3000/posts`).then((res) => {
      setData(res);
    });
  }, []);
  console.log(data);

  return (
    <Pagelayout>
      <p className="ALL">ALL</p>
      <div className="fetchdata">
        {data?.map((user) => (
          <div key={user.id}>
            <img src={user.image} />
            <p>{user.title}</p>
            <p>{user.price}</p>

            {/* <Link to={`/users/${user.id}`}>More Details</Link> */}
          </div>
        ))}
      </div>
    </Pagelayout>
  );
};

export default Cart;
