import React, { Component } from "react";
import "./App.css";
import MarsForm from "./components/MarsMissionI.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p />

          <MarsForm />
        </header>
      </div>
    );
  }
}

export default App;
