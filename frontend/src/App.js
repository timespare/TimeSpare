import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={UserProfile} />
<<<<<<< HEAD
      <Route exact path="/" component={Home} />
=======

>>>>>>> a3ef8d5249fe6f974ab91b208e4ad30b297e985c
    </div>
  );
}

export default App;
