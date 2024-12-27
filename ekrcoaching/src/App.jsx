import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import veriler from "./veriler";

import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Salesandmarketing from "./components/Salesandmarketing";
import Noro from "./components/Noro";
import TimeManagement from "./components/TimeManagement";
import Leadership from "./components/Leadership";
import CommunucationSkills from "./components/CommunucationSkills";
import Theartofsayingno from "./components/Theartofsayingno";
import Costmanagement from "./components/Costmanagement";
import Goalsetting from "./components/Goalsetting";
import Coaching from "./components/Coaching";
import Mentoring from "./components/Mentoring";
import SalesAndMarketingConsultancy from "./components/SalesAndMarketingConsultancy";
import Exportconsultancy from "./components/Exportconsultancy";

function App() {
  const [datas, Setdatas] = useState({});
  const location = useLocation(); // useLocation hook'u ile geçerli sayfa bilgisi alındı

  useEffect(() => {
    if (localStorage.getItem("language") == null) {
      Setdatas(veriler.turkish);
    } else {
      Setdatas(veriler[localStorage.getItem("language")]);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Header datas={datas} setdata={Setdatas} />
      <Switch>
        <Route exact path="/">
          <HomePage datas={datas} />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs datas={datas} />
        </Route>
        <Route exact path="/salesandmarketing">
          <Salesandmarketing datas={datas} />
        </Route>
        <Route exact path="/noro">
          <Noro datas={datas} />
        </Route>
        <Route exact path="/timemanagement">
          <TimeManagement datas={datas} />
        </Route>
        <Route exact path="/communucationskills">
          <CommunucationSkills datas={datas} />
        </Route>
        <Route exact path="/leadership">
          <Leadership datas={datas} />
        </Route>
        <Route exact path="/theartofsayingno">
          <Theartofsayingno datas={datas} />
        </Route>
        <Route exact path="/costmanagement">
          <Costmanagement datas={datas} />
        </Route>
        <Route exact path="/goalsetting">
          <Goalsetting datas={datas} />
        </Route>
        <Route exact path="/coaching">
          <Coaching datas={datas} />
        </Route>
        <Route exact path="/mentoring">
          <Mentoring datas={datas} />
        </Route>
        <Route exact path="/salesandmarketingconsultancy">
          <SalesAndMarketingConsultancy datas={datas} />
        </Route>
        <Route exact path="/exportconsultancy">
          <Exportconsultancy datas={datas} />
        </Route>
        <Route exact path="/contact">
          <Contact datas={datas} />
        </Route>
      </Switch>

      {location.pathname !== "/aboutus" && location.pathname !== "/contact" && (
        <Footer datas={datas} />
      )}
    </div>
  );
}

export default App;
