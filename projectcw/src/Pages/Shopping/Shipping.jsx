import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import Pagelayout from "../../Components/PageLayout/PageLayout";
import ShoppingComp from "../../Components/ShoppingComp/ShoppingComp";
import { getData } from "../../Redux/AppReducer/action";
import "./Shipping.css";

// import { Filter } from "./Filter";
const Shopping = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.AppReducer.Data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);

  console.log("Data", Data);
  useEffect(() => {
    dispatch(getData);
  }, [dispatch]);
  return (
    <>
      <Pagelayout>
        {/* <div>
            <Filter />
          </div> */}
        <div>
          <h1 className="h1">ALL DATA</h1>
          <div className="Shopping">
            {isLoading && <Loading />}
            {Data.length > 0 &&
              Data.map((item) => {
                return (
                  <Link to={`/Headphone/${item._id}`}>
                    <div className="baneer" key={item._id}>
                      <ShoppingComp item={item} />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </Pagelayout>
    </>
  );
};

export default Shopping;
