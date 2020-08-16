import React from "react";
import "./App.css";
import { Example } from "./Example";
import { ExampleWithConnect } from "./ExampleWithConnect";

function App() {
  return (
    <div className="App">
      <Example />
      <ExampleWithConnect />
    </div>
  );
}

export default App;
