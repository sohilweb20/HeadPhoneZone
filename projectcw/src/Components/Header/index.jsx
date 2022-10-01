import { Link, NavLink } from "react-router-dom";
import "./style.css";
// import Login from "../../Pages/Login"

import DrawerExample from "./Slider";
import DrawerExample2 from "./SearchSlider";
import HeadPhoneIcon from "./HeadPhoneIcon";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img
            className="logo"
            src="https://assets.rha-audio.com/nzssx/c/Headphone_zone_logo_3-small.png"
          />
        </Link>
        <ul className="nav-links">
          <li className="sale">SALE</li>
          <li className="dropdown">
            <a>Categories</a>
            <ul className="child-dropdown">
              <div className="imagediv">
                <li>
                  {/* <HeadPhoneIcon /> */}
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/iems-under-1000_200x.png?v=1649917945" />
                  <p>IN- EARS FOR BEGINERS</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-under-15000_200x.png?v=1649922390" />
                  <p>HEADPHONES FOR BEGINERS</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/tws-anc-1_200x.png?v=1651320486" />
                  <p>TRUE WIRELESS FOR BUDS</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/flagship-headphones-closed-back-1_200x.png?v=1651833407" />
                  <p>WIRELESS HEADPHONES</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH5s-01_c0e6da60-45a5-4218-8a59-6e5f66fa3486_500x.jpg?v=1631871302" />
                  <p>FLAGSHIP IEMS</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/61I3R2ioAlL._SX522_.jpg" />
                  <p>FLAGSHIP HEADPHONES</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/players-portable-1_200x.png?v=1651840871" />
                  <p> HI-RES AUDIO PLAYER</p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-ddHiFi-TC35-Pro-Lighting-to-3.5mm-Decoder-_Eye_-1_500x.jpg?v=1626685449" />
                  <p>PORTABLE AMS & DACS</p>
                </li>
                <li>
                  <img src="https://images-eu.ssl-images-amazon.com/images/I/41jKAQr-0BL._SY300_SX300_QL70_FMwebp_.jpg" />
                  <p>DESKTOP AMPS & DACS</p>
                </li>
                <li>
                  <img src="https://images-eu.ssl-images-amazon.com/images/I/41ghx0srwOS._SX300_SY300_QL70_FMwebp_.jpg" />
                  <p>WORK FROM HOME</p>
                </li>
                <li>
                  <img src="https://images-eu.ssl-images-amazon.com/images/I/41jKAQr-0BL._SY300_SX300_QL70_FMwebp_.jpg" />
                  <p> GAMING</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/61c8fkHZyHL._AC_UL480_FMwebp_QL65_.jpg" />
                  <p>STUDIO & PROFESSION</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/81grtcmxsyL._SX522_.jpg" />
                  <p> SPEAKERS</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/51SPbRMXiBL._AC_UL480_FMwebp_QL65_.jpg" />
                  <p>CABLES</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg" />
                  <p>EARTIPS & EARPADS</p>
                </li>
                <li>
                  <img src="https://m.media-amazon.com/images/I/6118YQPQZlL._AC_UY327_FMwebp_QL65_.jpg" />
                  <p>CASES</p>
                </li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            Brands
            <ul className="child-dropdown">
              <div className="Brands">
                <li>1Custom</li>
                <li>Beyerdynamic</li>
                <li>Devialet</li>
                <li>HEDD Audio</li>
                <li>Little Dot</li>
                <li>RAPTGO</li>
                <li>Thieaudio</li>
                <li>64 Audio</li>
                <li>BLON</li>
                <li>EarMen</li>
                <li>HiBy </li>
                <li>Lotoo</li>
                <li>RME</li>
                <li>TiN HiFi</li>
                <li>Abyss</li>
                <li>Bowers&Wilkins</li>
                <li>Effect Audio</li>
                <li>Hidizs</li>
                <li>Lypertek</li>
                <li>Schiit</li>
                <li>TOPPING</li>
                <li>AJAIAI</li>
                <li>Latoo</li>
                <li>EIKSON</li>
                <li>HiFiMAN </li>
                <li>Mangird</li>
                <li>Senheiser</li>
                <li>Tripowin</li>
                <li>campife Audio</li>
                <li>EPos</li>
                <li>iBASSo</li>
                <li>iFi Audio</li>
                <li> Matrix Audio</li>
                <li>SHure</li>
                <li>Vioelectric</li>
                <li>ALO AUdio</li>
                <li>CCA</li>
                <li>FiiOO</li>
                <li>Jabra&Wilkins</li>
                <li>Meze Audio</li>
                <li>Mono Price </li>
                <li>Naim</li>
                <li>RAPTGO</li>
                <li>Thieaudio</li>
                <li>64 Audio</li>
                <li>BLON</li>
                <li>EarMen</li>
                <li>HiBy </li>
                <li>Lotoo</li>
                <li>RME</li>
                <li>TiN HiFi</li>
                <li>Abyss</li>
                <li>Thieaudio</li>
                <li>64 Audio</li>
                <li>BLON</li>
                <li>EarMen</li>
                <li>HiBy </li>
                <li>Lotoo</li>
                <li>EPos</li>
                <li>iBASSo</li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a>Price</a>
            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>Best HeadPhones Under Rs. 1000</li>
                <li>Best HeadPhones Under Rs. 2000</li>
                <li>Best HeadPhones Under Rs. 3000</li>
                <li>Best HeadPhones Under Rs. 4000</li>
                <li>Best HeadPhones Under Rs. 5000</li>
                <li>Best HeadPhones Under Rs. 10000</li>
                <li>Best HeadPhones Under Rs. 20000</li>
                <li>Best HeadPhones Under Rs. 30000</li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a>Deals</a>
            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>Unboxed</li>
                <li>Pre-Owned</li>
                <li>Demo Unit</li>
                <li>Deals of the Month</li>
                <li>Clearance</li>
              </div>
            </ul>
          </li>
          <li>Headphone </li>
          <li className="dropdown">
            <a>Events</a>
            <ul className="child-dropdown2">
              <div className="lidiv">
                <li>HeadPhone Zone Experiences</li>
                <li>Book an Author Tour</li>
                <li>HeadPhone Connect</li>
              </div>
            </ul>
          </li>
          <li>Forum</li>
          <li className="dropdown">
            <a>Info</a>
            <ul className="child-dropdown">
              <div className="imagediv2">
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-2021_580x.jpg?v=1659522116" />
                  <p>HISTORY OF HEADPHONE ZONE</p>
                  <p>
                    Read the Headphone Zone journey <br />
                    since 2011 as told by Raghav
                  </p>
                </li>
                <li>
                  <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Club-Audiophile-Menu_500x-focal_295x.jpg?v=1643088424" />
                  <p>IT PAYS TO BE AN AUDIOPHILE</p>
                  <p>
                    Enjoy Membership only Rewards
                    <br />
                    loyalty Program{" "}
                  </p>
                </li>
                <li className="info">
                  <p className="infop">ABOUT US</p>
                  <p>Our Story</p>
                  <p>Our Values</p>
                  <p>Customer Testimonals</p>
                  <p>Brands</p>
                </li>
                <li className="info">
                  <p className="infop">GET IN TOUCH</p>
                  <p>Contact the Team</p>
                  <p>Corporate Gifting</p>
                  <p>Partner with Touch</p>
                </li>
                <li className="info">
                  <p className="infop">COMMUNITY</p>
                  <p>Headphone Zone</p>
                  <p>Trade Up Program</p>
                  <p>Affiliate Programm</p>
                </li>
              </div>
            </ul>
          </li>
          <li>Help</li>
        </ul>

        <ul className="nav-links-2">
          <li>
            <DrawerExample2 />
          </li>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
          <li>
            <DrawerExample />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
