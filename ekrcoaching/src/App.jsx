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
        <Route exact path="/contact">
          <Contact datas={datas} />
        </Route>
      </Switch>

      {location.pathname !== "/aboutus" && <Footer datas={datas} />}
    </div>
  );
}

export default App;
