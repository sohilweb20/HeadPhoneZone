import Pagelayout from "../../PageLayout";
import AutoPlay from "./slideshow";
import "./Home.css";
import Video from "./Video";
import CompanyLogo from "./CompanyLogo";
import FirstBoxes from "./FirstBox";
import SecondBoxes from "./SecondBoxes";

export default function Home() {
  return (
    <Pagelayout>
      <AutoPlay />

      <div>
        <p className="HEY">HEY NOW, HEY NOW, THIS IS WHAT DREAMS ARE MADE OF</p>
        <p className="HANDPICKED">HANDPICKED DEALS FOR THE AUDIOPHILE IN YOU</p>
      </div>
      <FirstBoxes />
      <SecondBoxes />
      <p className="SHOP">SHOP THE FESTIVAL OF SOUND SALE</p>
      <div className="button">
        <button className="button1">WIRED EARPHONE</button>
        <button className="buttons">WIRED HEADPHONE</button>
        <button className="buttons">AMPS & DACS</button>
        <button className="buttons">TRUE WIRELESS</button>
        <button className="buttons">WIRELESS PHONE</button>
      </div>
      <div className="divs">
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-LYRA-01_300x.jpg?v=1659512980"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-ZEX-Black-2_300x.jpg?v=1632918833"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/headphone-Zone-7HZ-Salnotes-ZERO-Black-02_300x.jpg?v=1660714478"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-SoundMAGIC-E11C-1160-1160-black_300x.jpg?v=1649233095"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Sennhieser-IE300-05_300x.jpg?v=1616396163"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
      </div>
      <button className="button2"> VIEW MORE</button>
      <p className="SHOP">SHOP THE FLAGSHIP COLLECTION</p>
      <div className="button">
        <button className="buttons">FLAGSHIP ITEM</button>
        <button className="buttons">FLAGSHIP HEADS</button>
        <button className="buttons">AMPS & DACS</button>
        <button className="buttons">HI-RES AUDIO PLAYER</button>
        <button className="buttons">WIRELESS PHONE</button>
      </div>

      <div className="divs">
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/4_e2bc35c9-7072-4b03-9f4a-24da04aed7b4_400x.jpg?v=1663224444"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Ara-02_400x.jpg?v=1591607325"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-A8000-01_54a4af03-1424-4943-af17-37535f23ae9e_500x.jpg?v=1644220901"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Andromeda-2020-3_400x.jpg?v=1589970936"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
        <div className="flexbox4">
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Sennhieser-IE300-05_300x.jpg?v=1616396163"
            alt=""
          />
          <p>CCA - LYRA</p>
          <p>In-Ears With 1 Dynamic Driver</p>
        </div>
      </div>
      <button className="button2"> VIEW MORE</button>

      <p className="SHOP">START YOUR AUDIOPHILE JOURNEY HERE</p>

      <div className="imagediv">
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/iems-under-1000_200x.png?v=1649917945"
            alt=""
          />
          <p>IN- EARS FOR BEGINERS</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/headphone-under-15000_200x.png?v=1649922390"
            alt=""
          />
          <p>HEADPHONES FOR BEGINERS</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/tws-anc-1_200x.png?v=1651320486"
            alt=""
          />
          <p>TRUE WIRELESS FOR BUDS</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/flagship-headphones-closed-back-1_200x.png?v=1651833407"
            alt=""
          />
          <p>WIRELESS HEADPHONES</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH5s-01_c0e6da60-45a5-4218-8a59-6e5f66fa3486_500x.jpg?v=1631871302"
            alt=""
          />
          <p>FLAGSHIP IEMS</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/61I3R2ioAlL._SX522_.jpg"
            alt=""
          />
          <p>FLAGSHIP HEADPHONES</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/players-portable-1_200x.png?v=1651840871"
            alt=""
          />
          <p> HI-RES AUDIO PLAYER</p>
        </li>
        <li>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-ddHiFi-TC35-Pro-Lighting-to-3.5mm-Decoder-_Eye_-1_500x.jpg?v=1626685449"
            alt=""
          />
          <p>PORTABLE AMS & DACS</p>
        </li>
        <li>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/41jKAQr-0BL._SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
          <p>DESKTOP AMPS & DACS</p>
        </li>
        <li>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/41ghx0srwOS._SX300_SY300_QL70_FMwebp_.jpg"
            alt=""
          />
          <p>WORK FROM HOME</p>
        </li>
        <li>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/41jKAQr-0BL._SY300_SX300_QL70_FMwebp_.jpg"
            alt=""
          />
          <p> GAMING</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/61c8fkHZyHL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          <p>STUDIO & PROFESSION</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/81grtcmxsyL._SX522_.jpg"
            alt=""
          />
          <p> SPEAKERS</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/51SPbRMXiBL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
          />
          <p>CABLES</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg"
            alt=""
          />
          <p>EARTIPS & EARPADS</p>
        </li>
        <li>
          <img
            src="https://m.media-amazon.com/images/I/6118YQPQZlL._AC_UY327_FMwebp_QL65_.jpg"
            alt=""
          />
          <p>CASES</p>
        </li>
      </div>

      <p className="like">LIKE YOU, WE LOVE MUSIC...</p>
      <Video />
      <p className="Likeand">
        And we believe a Headphone is more than just an instrument for sound.
        <br />
        It’s the key to a mind-blowing moment of emotion, bringing you closer to
        your favourite artist, and <br />
        yourself. We’ve curated the world’s finest headphones & earphones to
        help you discover the riffs, percussions, <br />
        basslines and solos that were always there but never heard.
      </p>

      <p className="like">HOME TO THE WORLD'S FINEST BRANDS</p>
      <CompanyLogo />
      <div className="value">
        <p className="valueshop">OUR VALUES</p>
        <div className="values">
          <div>
            <p>01</p>
            <p>WE'RE LADIES & GENTLEMEN SERVING LADIES & GENTLEMEN</p>
          </div>
          <div>
            <p>02</p>
            <p>WE CHOOSE TO BE THE BEST, RATHER THAN THE BIGGEST</p>
          </div>
          <div>
            <p>03</p>
            <p>
              WE'RE NOT A MUSIC COMPANY, BUT MUSIC IS AT THE CORE OF WHAT WE DO
            </p>
          </div>
          <div>
            <p>04</p>
            <p>WE'RE 100% OWNED, OPERATED AND FUNDED BY PROUD INDIANS</p>
          </div>
          <div>
            <p>05</p>
            <p>
              WE SUPPORT SMALL, INDEPENDENT AND LOCAL BUSINESSES AND COMMUNITIES
            </p>
          </div>
        </div>
      </div>

      <div className="pic">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704"
            alt=""
          />
        </div>
        <div className="pic2">
          <h1>IT PAYS TO BE AN AUDIOPHILE</h1>
          <p>
            Enjoy Incredible Members-only rewards on the world's finest
            headphones and <br />
            earn loyalty points on every purchase.
          </p>
          <button className="button22">JOIN THE CLUB</button>
        </div>
      </div>
    </Pagelayout>
  );
}
