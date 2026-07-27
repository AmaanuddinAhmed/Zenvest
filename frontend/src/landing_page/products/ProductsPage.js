import React from "react";
import Hero from "./Hero";
import LeftImgSection from "./LeftImgSection";
import RightImgSection from "./RightImgSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftImgSection
        image={"media/images/kite.png"}
        title={"Kite"}
        desc={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={""}
        learnMore={""}
        google={""}
        apple={""}
      />
      <RightImgSection
        image={"media/images/console.png"}
        title={"Console"}
        desc={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={""}
      />
      <LeftImgSection
        image={"media/images/coin.png"}
        title={"Coin"}
        desc={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={""}
        learnMore={""}
        google={""}
        apple={""}
      />
      <RightImgSection
        image={"media/images/kiteconnect.png"}
        title={"Kite Connect API"}
        desc={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={""}
      />
      <LeftImgSection
        image={"media/images/varsity.png"}
        title={"Varsity mobile"}
        desc={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        tryDemo={""}
        learnMore={""}
        google={""}
        apple={""}
      />
      <h5 className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="">Zerodha.tech</a> blog.
      </h5>
      <Universe />
    </>
  );
}

export default ProductsPage;
