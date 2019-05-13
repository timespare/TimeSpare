import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/login" component={LoginFormContainer} /> */}
      {/* <Route exact path="/" */}
    </div>
  );
}

export default App;
