import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagelayout from "../../Components/PageLayout/PageLayout";
import ShoppingComp from "../../Components/ShoppingComp/ShoppingComp";

const Search = () => {
  const [value, setvalue] = useState("");
  const [data, setdata] = useState([]);
  const inputref = useRef("");

  const apidata = (params = {}) => {
    return axios.get(`https://ruby-repulsive-crocodile.cyclic.app/HeadPhone`, {
      params: {
        q: params.value,
      },
    });
  };
  useEffect(() => {
    apidata({ value }).then((res) => setdata(res.data));
  }, [value]);

  const handelchange = () => {
    setvalue(inputref.current.value);
    console.log(value);
  };

  console.log("dataS", data);

  return (
    <Pagelayout>
      <h1 className="h1">SEARCH</h1>
      <div className="Searchss">
        <input ref={inputref} type={"text"} placeholder="Search Items" />
        <button onClick={handelchange}>Search</button>
      </div>
      <div className="Shopping">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div className="baneer" key={item._id}>
                <ShoppingComp item={item} />
              </div>
            );
          })}
      </div>
    </Pagelayout>
  );
};

export default Search;
