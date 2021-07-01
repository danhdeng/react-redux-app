import React from "react";
import HomePage from "./containers/HomePage"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HomePage />
    </div>
    </BrowserRouter>
  );
}

export default App;
