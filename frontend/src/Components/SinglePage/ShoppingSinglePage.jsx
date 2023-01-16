import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";
import { getData } from "../../Redux/AppReducer/action";
import "./Single.css";
const ShoppingSinglePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Data);
  //   console.log("Trend", Trending_data);
  const [currentTrending, setCurrentTrending] = useState({});

  useEffect(() => {
    if (Trending_data.length === 0) {
      dispatch(getData());
    }
  }, [Trending_data.length, dispatch]);

  useEffect(() => {
    if (_id) {
      const currentTrending = Trending_data.find((item) => item._id === _id);
      currentTrending && setCurrentTrending(currentTrending);
    }
  }, [_id, Trending_data]);
  return (
    <Pagelayout>
      <div className="Singlepage">
        <div className="images">
          <img src={`${currentTrending.Poster}`} alt="Cover Pic" />
        </div>
        <div className="abouts">
          <h2>{currentTrending?.Title}</h2>
          <h1>Colour - {currentTrending.Color}</h1>
          <h4>{currentTrending.Review}</h4>
          <h3>Price : {currentTrending?.Price} Rs.</h3>
          <h5>About : - </h5>
          <p>{currentTrending.Detail}</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </Pagelayout>
  );
};

export default ShoppingSinglePage;
