import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Chats from "./components/Chats";

export default function App() {
  return (
    <>
      <Router>
        {/* <AuthProvider> */}
        <Switch>
          {/* <Route path="/chats" component={Chats}></Route> */}
          <Route path="/" component={Login}></Route>
        </Switch>
        {/* </AuthProvider> */}
      </Router>
    </>
  );
}
test;
