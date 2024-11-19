import React from "react";
import veriler from "../veriler";
import logo from "../assets/ekrlogo.png";
import ing from "../assets/ing.png";
import tr from "../assets/tr.png";
import "../cssfiles/dropdownmenu.css";
function Header({ datas, setdata }) {
  const changelanguage = (event) => {
    if (event.target.id == "turkish") {
      setdata(veriler.turkish);
      localStorage.setItem("language", "turkish");
    } else {
      setdata(veriler.english);
      localStorage.setItem("language", "english");
    }
  };
  return (
    <>
      <div className="w-full flex justify-between items-center border-black">
        <img className="w-[300px] h-[150px] " src={logo}></img>
        <div className="flex gap-6 ">
          {/* 1.Menu Bar*/}
          <div className="menu">
            <div className="item">
              <a href="#" className="link">
                <span> {datas.Individual} </span>
                <svg viewBox="0 0 360 360" xmlSpace="preserve">
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="XMLID_225_"
                      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                  </g>
                </svg>
              </a>
              <div className="submenu">
                <div className="submenu-item">
                  <a href="#" className="submenu-link">
                    {datas.Trainings}
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="#" className="submenu-link">
                    {datas.Services}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 1.Menu Bar*/}

          {/* 2.Menu Bar*/}
          <div className="menu">
            <div className="item">
              <a href="#" className="link">
                <span> {datas.AboutUs} </span>
                <svg viewBox="0 0 360 360" xmlSpace="preserve">
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="XMLID_225_"
                      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    ></path>
                  </g>
                </svg>
              </a>
              <div className="submenu">
                <div className="submenu-item">
                  <a href="#" className="submenu-link">
                    {datas.Vision}
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="#" className="submenu-link">
                    {datas.Mission}
                  </a>
                </div>
                <div className="submenu-item">
                  <a href="#" className="submenu-link">
                    {datas.Values}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2.Menu Bar*/}

          {/* 3.Menu Bar*/}
          <div className="menu">
            <div className="item">
              <a href="#" className="link">
                <span> {datas.Contact} </span>
              </a>
            </div>
          </div>
          {/* 3.Menu Bar*/}
        </div>
        <div className="flex gap-2 pr-16">
          <img
            src={tr}
            className="w-7 h-7 cursor-pointer"
            id="turkish"
            onClick={changelanguage}
          ></img>
          <img
            src={ing}
            className="w-7 h-7 cursor-pointer"
            id="english"
            onClick={changelanguage}
          ></img>
        </div>
      </div>
      <hr
        className="border-b-[1px] border-gray-500 w-full"
        style={{ zIndex: 1 }}
      />
    </>
  );
}

export default Header;
