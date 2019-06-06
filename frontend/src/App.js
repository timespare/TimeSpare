import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Splash from "./components/splash/Splash";

function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={UserProfile} />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Splash} />
      {/* <Route path="/current" component={} /> */}
    </div>
  );
}

export default App;
