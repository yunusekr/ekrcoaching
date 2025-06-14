import React, { useEffect } from "react";
import "../cssfiles/whyus.css";
import hi from "../assets/hi.jpg";
import achievement from "../assets/basari.jpg";
import personal from "../assets/personal.jpg";
function WhyUs({ datas }) {
  useEffect(() => {
    const items = document.querySelectorAll(".item");
    const sectionHead = document.querySelector(".section-head h4");
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 150);
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, observerOptions);

    // "Why Choose Us?" başlığı için özel gözlemci
    const sectionHeadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Soldan kayarak gelme efekti için sınıf ekle
          entry.target.classList.add("section-head-show");
        } else {
          // Geri gitme efekti için sınıfı kaldır
          entry.target.classList.remove("section-head-show");
        }
      });
    }, observerOptions);

    // Başlık elementini gözlemle
    if (sectionHead) {
      sectionHeadObserver.observe(sectionHead);
    }

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
      if (sectionHead) {
        sectionHeadObserver.unobserve(sectionHead);
      }
    };
  }, []);

  return (
    <div className="feat bg-gray pt-5 pb-5 mt-[60px]">
      <div className="container">
        <div className="row flex flex-col justify-center items-center">
          <div className="section-head col-sm-12">
            <h4 className="font-[Lora] text-center">
              <span
                className="font-[Lora] text-[50px]"
                style={{ textShadow: "0px 15px 4px rgba(0, 0, 0, 0.5)" }}
              >
                {datas.Why}
              </span>{" "}
              <span
                className="font-[Lora] text-[50px] "
                style={{
                  color: "#818181",
                  textShadow: "0px 15px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {datas.Us}
              </span>
            </h4>
          </div>
          <div className="flex gap-10 md:flex-row flex-col">
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <img className="h-[175px]" src={personal} alt="" />
                <h6 className="font-bold text-[18px] font-[Lora]">
                  {datas.PersonalizedApproach}
                </h6>
                <p style={{ fontFamily: "Playfair Display, serif" }}>
                  {datas.Whyustext1}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <img className="h-[175px]" src={hi} alt="" />
                <h6 className="font-bold text-[18px] font-[Lora]">
                  {datas.EthicalandReliableService}
                </h6>
                <p style={{ fontFamily: "Playfair Display, serif" }}>
                  {datas.Whyustext2}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <img className="h-[175px]" src={achievement} alt="" />
                <h6 className="font-bold text-[18px] font-[Lora]">
                  {datas.ProvenResults}
                </h6>
                <p style={{ fontFamily: "Playfair Display, serif" }}>
                  {datas.Whyustext3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
