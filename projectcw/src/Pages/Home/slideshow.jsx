import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div style={{ marginTop: "50px" }}>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0153/8863/files/FOSS_HomepageBanner_Desktop_copy_2-100_2000x.jpg?v=1663696583"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="https://cdn.shopify.com/s/files/1/0153/8863/files/1000XM5-Homepage-Banner-Desktop_1_5a1f2d4d-b9f2-4e5d-98a2-348527d0a28f_2000x.jpg?v=1663746601"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
