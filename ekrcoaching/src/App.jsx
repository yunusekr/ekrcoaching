import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import veriler from "./veriler";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  const [datas, Setdatas] = useState({});
  useEffect(() => {
    if (localStorage.getItem("language") == null) {
      Setdatas(veriler.turkish);
    } else {
      Setdatas(veriler[localStorage.getItem("language")]);
    }
  }, []);

  return (
    <>
      <Header datas={datas} setdata={Setdatas} />
      <Switch>
        <Route exact path="/">
          <HomePage datas={datas} />
        </Route>
      </Switch>
      <Footer datas={datas} />
    </>
  );
}

export default App;
