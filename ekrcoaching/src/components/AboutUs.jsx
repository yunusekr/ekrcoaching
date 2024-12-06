import React, { useEffect } from "react";
import $ from "jquery";
import "jquery.waitforimages";
import "../cssfiles/aboutus.css";

function AboutUs({ datas }) {
  useEffect(() => {
    // Görüntülerin yüklenmesini bekler ve spinner'ı gizler.
    $(".flex-container-mission").waitForImages(() => {
      $(".spinner-mission").fadeOut();
    });

    // Hover efektleri.
    $(".flex-slide-mission").each(function () {
      $(this).hover(
        function () {
          $(this).find(".flex-title-mission").css({
            transform: "rotate(0deg)",
            top: "10%",
          });
          $(this).find(".flex-about-mission").css({
            opacity: "1",
          });
        },
        function () {
          $(this).find(".flex-title-mission").css({
            transform: "rotate(90deg)",
            top: "15%",
          });
          $(this).find(".flex-about-mission").css({
            opacity: "0",
          });
        }
      );
    });
  }, []);

  return (
    <>
      <div className="flex-container-mission">
        <div className="flex-slide-mission home-mission">
          <div className="flex-title-mission flex-title-home-mission font-[Lora]">
            {datas.Vision}
          </div>
          <div className="flex-about-mission flex-about-home-mission">
            <p style={{ fontFamily: "Playfair Display, serif" }}>
              {datas.Aboutustext1}
            </p>
          </div>
        </div>
        <div className="flex-slide-mission about-mission">
          <div className="flex-title-mission font-[Lora]">{datas.Mission}</div>
          <div className="flex-about-mission">
            <ol>
              <li style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.Aboutustext2}
              </li>
              <br />
              <li style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.Aboutustext3}
              </li>
              <br />
              <li style={{ fontFamily: "Playfair Display, serif" }}>
                {datas.Aboutustext4}
              </li>
            </ol>
          </div>
        </div>
        <div className="flex-slide-mission work-mission">
          <div className="flex-title-mission font-[Lora]">{datas.Values}</div>
          <div className="flex-about-mission">
            <p style={{ fontFamily: "Playfair Display, serif" }}>
              {datas.Aboutustext5}
            </p>
            <p style={{ fontFamily: "Playfair Display, serif" }}>
              {datas.Aboutustext6}
            </p>
            <p style={{ fontFamily: "Playfair Display, serif" }}>
              {datas.Aboutustext7}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
