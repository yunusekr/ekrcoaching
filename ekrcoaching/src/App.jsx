import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
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
import veriler from "./veriler";

function App() {
  const [datas, Setdatas] = useState({});
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (localStorage.getItem("language") == null) {
      Setdatas(veriler.turkish);
    } else {
      Setdatas(veriler[localStorage.getItem("language")]);
    }

    // Ekran boyutu dinle
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Ekran mobil ise, sadece bu yazıyı göster
    return (
      <div className="w-full h-screen flex justify-center items-center bg-yellow-200 text-black font-bold text-xl">
        Site mobil için hazırlanıyor...
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Sadece masaüstü/tablet için Header */}
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

      {/* Sadece anasayfada ve masaüstünde Footer */}
      {location.pathname === "/" && <Footer datas={datas} />}
    </div>
  );
}

export default App;
