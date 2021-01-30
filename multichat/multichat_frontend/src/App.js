import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import RoomIntermediate from "./RoomIntermediate";
import ButtonAppBar from "./Navigation";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
          <nav> <ButtonAppBar /></nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:roomId" component={RoomIntermediate} />
          <Route path="/login" component={() => {
              window.location.href = "http://localhost:8000/accounts/login/";
              return null;
          }} />
        </Switch>
      </div>
    </Router>
  );
}


