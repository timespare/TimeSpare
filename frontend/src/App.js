import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      {/* <Route path="/current" component={} /> */}
    </div>
  );
}

export default App;
