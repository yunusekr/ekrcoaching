import React from "react";
import "../cssfiles/salesandmarketing.css";
import blackpaper from "../assets/blackgate.jpg";
import exportconsulting from "../assets/exportconsulting.jpg";
function Exportconsultancy({ datas }) {
  return (
    <div className="w-full h-[100vh] mt-[-60px] flex">
      <div
        className="flex flex-col items-center gap-9 h-full w-[120%] slide-in-left text-white justify-center"
        style={{
          backgroundImage: `
                linear-gradient(to left, rgba(0, 0, 0,1), rgba(0, 0, 0, 0)),
                url("${blackpaper}")
              `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center mt-5">
          <p className="text-[2.5vw] font-[Lora]">
            {datas.ExportcConsultancytext1}
          </p>
          <p
            className="text-[1.5vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.ExportcConsultancytext2}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="text-[1.5vw] w-[90%] italic"
            style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
          >
            {datas.ExportcConsultancytext3}
          </p>
          <div className="w-[75%]">
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.ExportcConsultancytext4}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.ExportcConsultancytext5}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.ExportcConsultancytext6}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.ExportcConsultancytext7}
            </li>
            <li
              className="text-[1.5vw] italic"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {datas.ExportcConsultancytext8}
            </li>
          </div>
        </div>
        <p
          className="text-[1.5vw] w-[90%] italic"
          style={{ fontFamily: "Playfair Display, serif", textIndent: "3vw" }}
        >
          {datas.ExportcConsultancytext9}
        </p>
      </div>
      <div
        className="flex flex-col items-center h-full w-full slide-in-right"
        style={{
          backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 30), rgba(0, 0, 0, 0)),
                url(${exportconsulting})
              `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Exportconsultancy;
