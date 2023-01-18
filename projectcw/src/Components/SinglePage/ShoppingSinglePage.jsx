import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagelayout from "../PageLayout/PageLayout";
import { getData } from "../../Redux/AppReducer/action";
import { AddToCart } from "../../Redux/AppReducer/action";
import { useToast } from "@chakra-ui/react";
import "./Single.css";
const ShoppingSinglePage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const Trending_data = useSelector((state) => state.AppReducer.Data);
  //   console.log("Trend", Trending_data);
  const [currentTrending, setCurrentTrending] = useState({});
  const toast = useToast();

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

  const handleClick = () => {
    dispatch(AddToCart(currentTrending));
    toast({
      position: "top",
      title: "Data Added in the Cart Successfully",
      description: "Please Continue to Shopping !",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };
  return (
    <Pagelayout>
      <div className="Singlepage">
        <div className="images">
          <img src={`${currentTrending.Poster}`} alt="Cover Pic" />
        </div>
        <div className="abouts">
          <h2>{currentTrending?.Title}</h2>
          <h4>{currentTrending?.Heading}</h4>
          <h1>Colour - {currentTrending.Colour}</h1>
          <h4>{currentTrending.Reviews}</h4>
          <h3>Price : {currentTrending?.Price} Rs.</h3>
          <h5>About : - </h5>
          <p>{currentTrending.Details}</p>
          <button onClick={handleClick}>ADD TO CART</button>
        </div>
      </div>
    </Pagelayout>
  );
};

export default ShoppingSinglePage;
