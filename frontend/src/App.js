import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
