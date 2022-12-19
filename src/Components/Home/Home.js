import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Scott International Men's Regular Fit T-Shirt (Pack of 3)"
            price={474}
            image="https://m.media-amazon.com/images/I/71vp8Lec9JL._UX679_.jpg"
            rating={4}
          />
          <Product
            id="54419823"
            title="Leriya Fashion Women's Corduroy Button Down Pocket Shirts Casual Long Sleeve Oversized Blouses Tops"
            price={349}
            image="https://m.media-amazon.com/images/I/61zb98Bg6QL._UX522_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Amazon Brand - Symbol Men's Regular Fit T-Shirt"
            price={609}
            image="https://m.media-amazon.com/images/I/81JKpcBkeSL._UX522_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Leriya Fashion Women's Corduroy Button Down Pocket Shirts Casual Long Sleeve Oversized Blouses Tops"
            price={349}
            image="https://m.media-amazon.com/images/I/61zb98Bg6QL._UX522_.jpg"
            rating={5}
          />
          <Product
            id="54419823"
            title="Leriya Fashion Women's Corduroy Button Down Pocket Shirts Casual Long Sleeve Oversized Blouses Tops"
            price={349}
            image="https://m.media-amazon.com/images/I/61zb98Bg6QL._UX522_.jpg"
            rating={5}
          />
          <Product
            id="41098920"
            title="LimeScotch Women's top and Shirt"
            price={472}
            image="https://m.media-amazon.com/images/I/314rvxDfBAL.jpg"
            rating={4}
          />
          <Product
            id="75879863"
            title="ROYALICA Women Black and White Checked Shirt with Heavy Black Inner"
            price={849}
            image="https://m.media-amazon.com/images/I/51EztyrOL-L._UX679_.jpg"
            rating={3}
          />
        </div>
         <div className="home__row">
          <Product
            id="54419823"
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
            price={12999}
            image="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/66197f12-7e47-451c-8aa1-d357fe68efeb._CR0,0,1200,628_SX507_QL70_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="Samsung Odyssey 49-in Gaming G9 Computer Monitor LC49G97TSSNXDC"
            price={1099.9}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="54419823"
            title="Leriya Fashion Women's Corduroy Button Down Pocket Shirts Casual Long Sleeve Oversized Blouses Tops"
            price={349}
            image="https://m.media-amazon.com/images/I/61zb98Bg6QL._UX522_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Leriya Fashion Women's Corduroy Button Down Pocket Shirts Casual Long Sleeve Oversized Blouses Tops"
            price={349}
            image="https://m.media-amazon.com/images/I/61zb98Bg6QL._UX522_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
