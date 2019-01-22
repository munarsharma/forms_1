import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MarsForm from "./forms.js";

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
