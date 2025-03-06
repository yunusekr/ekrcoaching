import React from "react";
import "../cssfiles/slogananimate.css";
import WhyUs from "./WhyUs";
import homePagePicture from "../assets/homepagepicture.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function HomePage({ datas }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/contact");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="w-full h-screen flex justify-center items-center bg-yellow-200 text-black font-bold text-xl md:hidden">
        Site mobil için hazırlanıyor...
      </div>

      <div className="hidden md:flex flex-col justify-center items-center w-full">
        <div className="container-text">
          {/* <h1>{datas.Wearelisteningtoyou}</h1> */}
        </div>

        <section className="feature">
          <div className="image">
            <img
              src={homePagePicture}
              alt="Feature Image"
              className="slide-from-left h-[893px]"
            />
          </div>
          <div className="text slide-from-right">
            <p className="font-bold font-[Lora] text-[1.5vw] text-center">
              {datas.Caption1}
            </p>
            <br />
            <p
              className="italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Text1}
            </p>
            <br />
            <p
              className="italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Text2}
            </p>
            <br />
            <p
              className="italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Text3}
            </p>
            <br />
            <p className="font-bold font-[Lora]">{datas.Text4}</p>
            <button type="button" className="btn mt-7" onClick={handleClick}>
              <strong>{datas.Buttontext}</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </div>
        </section>
        <WhyUs datas={datas} />
      </div>
    </div>
  );
}

export default HomePage;
