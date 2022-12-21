import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/AppReducer/action";
const Shopping = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Appreducer.Data);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);

  useEffect(() => {
    dispatch(getData);
  }, [dispatch]);
  return (
    <>
      <h1 className="Watchfree">CURRENT HITS AND FUTURE RELEASE</h1>
      <div className="TrendingDiv">
        {isLoading && <h1>Loading....</h1>}
        {Data.length > 0 &&
          Data.map((item) => {
            return (
              <div key={item._id}>
                <img src={item.Poster} alt={item.Title} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Shopping;
