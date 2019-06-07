import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
<<<<<<< HEAD
import Splash from "./components/splash/Splash";
import Footer from "./components/footer/Footer"

=======
import DisplayUser from "./components/DisplayUser";
import Splash from "./components/splash/splash";
import Footer from "./components/footer/Footer";
>>>>>>> userRating
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Splash} />
      <Route exact path="/" component={Footer} />
      <Route exact path="/profile" component={UserProfile} />
<<<<<<< HEAD
=======
      <Route exact path="/users/:userId" component={DisplayUser} />
>>>>>>> userRating
      <Route exact path="/home" component={Home} />
      {/* <Route path="/current" component={} /> */}
    </div>
  );
}

export default App;
