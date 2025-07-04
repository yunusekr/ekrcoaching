import React from "react";
import veriler from "../veriler";
import logotr from "../assets/ekrlogo(tr2).png";
import logoing from "../assets/ekrlogo(eng2).png";
import ing from "../assets/ing.png";
import tr from "../assets/tr.png";
import "../cssfiles/dropdownmenu.css";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import MobilMenu from "./MobilMenu";
import Navbar from "./Navbar";

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
      <div
        className="w-full md:flex justify-center gap-[6rem] items-center z-[100] relative diagonal-div sticky top-0 bg-white fixed hidden"
        style={{
          boxShadow: "0px 0.5px 4px 0.5px black",

          zIndex: 1000, // Optional, in case you have other overlapping elements
        }}
      >
        {/* Using placeholder image for logo */}
        <img
          className="w-[75px] h-[60px]"
          src={
            localStorage.getItem("language") == "turkish" ||
            localStorage.getItem("language") == null
              ? logotr
              : logoing
          }
          alt="logo"
        />
        <nav>
          <div className="container">
            <div className="row">
              <div className="mobile_btn">
                <i className="fas fa-bars"></i>
              </div>
              <div className="main_menu">
                <ul className="flex gap-10">
                  <li className="has_dropdown">
                    <a href="/">{datas.Homepage}</a>
                  </li>
                  <li className="has_dropdown">
                    <a href="/aboutus">{datas.AboutUs}</a>
                    {/* <ul className="sub_menu">
                    <li className="has_dropdown">
                      <a href="#">{datas.Vision}</a>
                    </li>
                    <li className="has_dropdown">
                      <a href="#">{datas.Mission}</a>
                    </li>
                    <li className="has_dropdown">
                      <a href="#">{datas.Values}</a>
                    </li>
                  </ul> */}
                  </li>
                  <li className="has_dropdown">
                    <a href="#">
                      {datas.Trainings} <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="sub_menu">
                      <li className="has_dropdown">
                        <a href="#">
                          {datas.Institutional}{" "}
                          <i className="fas fa-angle-right"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/salesandmarketing">
                              {datas.SalesMarketingTechniques}
                            </a>
                          </li>
                          <li>
                            <a href="/noro">{datas.NeuroSales}</a>
                          </li>
                          <li>
                            <a href="/timemanagement">{datas.TimeManagement}</a>
                          </li>
                          <li>
                            <a href="/leadership">{datas.Leadership}</a>
                          </li>
                          <li>
                            <a href="/communucationskills">
                              {datas.CommunicationSkills}
                            </a>
                          </li>
                          <li>
                            <a href="/theartofsayingno">
                              {datas.Theartofsayingno}
                            </a>
                          </li>
                          <li>
                            <a href="/costmanagement">{datas.Costmanagement}</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has_dropdown">
                        <a href="#">
                          {datas.Individual}{" "}
                          <i className="fas fa-angle-right"></i>
                        </a>
                        <ul className="sub_menu">
                          <li className="has_dropdown">
                            <a href="/goalsetting">
                              {datas.GoalSettingModelling}{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has_dropdown">
                    <a href="#">
                      {datas.Services} <i className="fas fa-angle-down"></i>
                    </a>

                    <ul className="sub_menu">
                      <li className="has_dropdown">
                        <a href="/coaching">{datas.Coaching}</a>
                      </li>
                      <li className="has_dropdown">
                        <a href="/mentoring">{datas.Mentoring}</a>
                      </li>
                      <li className="has_dropdown">
                        <a href="#">
                          {datas.Consulting}{" "}
                          <i className="fas fa-angle-right"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/salesandmarketingconsultancy">
                              {datas.Salesandmarketingconsultancy}
                            </a>
                          </li>
                          <li>
                            <a href="/exportconsultancy">
                              {datas.Exportconsultancy}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has_dropdown">
                    <a href="/textilesolutions">{datas.TextileSolutions}</a>
                  </li>
                  <li className="has_dropdown">
                    <a href="/contact">{datas.Contact}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex gap-2 pr-16">
          {/* Using placeholder images for flags */}
          <img
            src={tr}
            className="w-8 h-8 cursor-pointer"
            id="turkish"
            onClick={changelanguage}
            alt="Turkish"
          />
          <img
            src={ing}
            className="w-8 h-8 cursor-pointer"
            id="english"
            onClick={changelanguage}
            alt="English"
          />
        </div>
      </div>
      <Navbar datas={datas} setdata={setdata} />
    </>
  );
}

export default Header;
