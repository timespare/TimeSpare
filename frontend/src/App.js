import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
<<<<<<< HEAD
=======

>>>>>>> 528edf06a7d19e42d29f919e2bf3f412ee93bf04
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
    </div>
  );
}

export default App;
