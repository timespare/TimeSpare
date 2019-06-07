import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import DisplayUser from "./components/DisplayUser";
import Splash from "./components/splash/Splash";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Splash} />
      <Route exact path="/" component={Footer} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/users/:userId" component={DisplayUser} />
      <Route exact path="/home" component={Home} />
      {/* <Route path="/current" component={} /> */}
    </div>
  );
}

export default App;
