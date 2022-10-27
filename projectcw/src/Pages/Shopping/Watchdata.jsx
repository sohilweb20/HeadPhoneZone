import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getHeadData } from "../../Redux/AppReducer/action";
import { Loading } from "../../Components/Loading/Loading";

const Watchdata = () => {
  const dispatch = useDispatch();
  const Watches = useSelector((store) => store.AppReducer.watches);
  const isLoading = useSelector((store) => store.AppReducer.isLoading);

  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || Watches.length === 0) {
      const category = searchParams.getAll("category");
      const queryParams = {
        params: {
          category: category,
        },
      };

      dispatch(getHeadData(queryParams));
    }
  }, [location.search, Watches.length, dispatch, location, searchParams]);
  return (
    <>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {Watches.length > 0 &&
        Watches.map((item) => {
          return (
            <div style={{ margin: "5px " }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  height: "250px",
                  width: "400px",
                }}
              />
              <h1 style={{ fontSize: "25px" }} key={item.id}>
                {item.name}
              </h1>
              <div>{item.category}</div>
            </div>
          );
        })}
    </>
  );
};

export default Watchdata;
