import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import costmanagement from "../assets/costmanagement.jpg";
function Goalsetting({ datas }) {
  return (
    <div className="w-full h-[743px] flex">
      <div
        className="flex flex-col items-center gap-16 h-full w-full slide-in-left text-white"
        style={{
          backgroundImage: `
                linear-gradient(to left, rgba(0, 0, 0,1), rgba(0, 0, 0, 0)),
                url(${blackpaper})
              `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center mt-20">
          <p className="text-[1.9rem] font-[Lora]">
            {datas.Salesandmarketingtext1}
          </p>
          <p
            className="text-[1.4rem] w-[70%] italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {datas.Goalsettingtext1}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[1.9rem] font-[Lora]">
            {datas.Salesandmarketingtext3}
          </p>
          <div>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Goalsettingtext2}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Goalsettingtext3}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Goalsettingtext4}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Goalsettingtext5}
            </li>
            <li
              className="text-[1.4rem] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.Goalsettingtext6}
            </li>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center h-full w-full  slide-in-right"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
                url("https://seldadogancan.com/wp-content/uploads/2023/03/smart-hedefler.jpeg")
              `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Goalsetting;
