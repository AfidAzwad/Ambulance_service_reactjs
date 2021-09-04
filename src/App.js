import React from "react";
import Home from "./components/home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Nonac from "./components/nonac";
import AC from "./components/ac";
import Electric from "./components/electric";
import Freezer from "./components/freezer";
import ICU from "./components/icu";
import Heartattack from "./components/heartattack.js";
import Snakebite from "./components/snakebite";

export default function App() {
  return (
    <div> 
      <React.Fragment>
        <Switch>
          <Route path="/" strict exact component={Home} />

          <Route path="/nonac" exact Component={Nonac}>
            <Nonac />
          </Route>

          <Route path="/ac" exact Component={AC}>
            <AC />
          </Route>
          <Route path="/icuambulance" exact Component={ICU}>
            <ICU />
          </Route>
          <Route path="/freezer" exact Component={Freezer}>
            <Freezer />
          </Route>
          <Route path="/electricshock" exact Component={Electric}>
            <Electric />
          </Route>
          <Route path="/heartattack" exact Component={Heartattack}>
            <Heartattack />
          </Route>
          <Route path="/snakebite" exact Component={Snakebite}>
            <Snakebite />
          </Route>
        </Switch>
      </React.Fragment>
    </div>
  );
}
