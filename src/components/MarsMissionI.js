import React from "react";
import Results from "./results.js";
import MarsFormRadio from "./MarsMissionRadio.js";
import MarsMissionCheckBox from "./MarsMissionCbox.js";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const years = [];
for (let x = 1910; x < 2007; x++) {
  years.push(x);
}

const countries = require("../countries.json");

const catFood = ["Dry", "Semi-Moist", "Wet", "What the hooMans eat"];

class MarsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      month: "",
      day: "",
      year: "",
      country: "",
      diet: "",
      texts: "",
      breathe: "",
      maritalStatus: "",
      stress: "",
      claustrophobic: "",
      famHistory: "",
      famLine: "",
      education: "",
      formSubmitted: false,
      formCompleted: false
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState({
      formSubmitted: true
    });
  };

  handleComplete = event => {
    this.setState({
      formCompleted: true
    });
  };

  render() {
    if (!this.state.formSubmitted) {
      return (
        <div className="mainFrame">
          <form>
            <h1> Mission to Mars </h1>
            <p id="starTrek">
              {" "}
              “Space: the final furrontier. These are the voyages of the
              starship Enterpurrise. Its continuing mission: to expawlore
              strange new worlds,to seek out new one of your 9 lives and new
              civilizations, to boldly go where hiss no one has gone befure.”{" "}
            </p>

            <h2> Paws on Mars </h2>
            <label> Full Name </label>
            <input
              name="name"
              type="text"
              onInput={this.handleInput}
              value={this.state.name}
            />
            <br />
            <br />

            <label> Date Of Birth </label>
            <select name="month" onChange={this.handleChange}>
              {months.map(months => (
                <option value={months}>{months}</option>
              ))}
            </select>

            <select name="day" onChange={this.handleChange}>
              {days.map(day => (
                <option value={day}>{day}</option>
              ))}
            </select>

            <select name="year" onChange={this.handleChange}>
              {years.map(year => (
                <option value={year}> {year} </option>
              ))}
            </select>

            <br />
            <br />

            <label> Country Of Origin </label>
            <select name="country" onChange={this.handleChange}>
              {countries.map(country => (
                <option value={country.name}>{country.name}</option>
              ))}
            </select>

            <br />
            <br />

            <label> Dietary Purrefurence </label>
            <select name="diet" onChange={this.handleChange}>
              {catFood.map(catfood => (
                <option value={catfood}>{catfood}</option>
              ))}
            </select>

            <br />
            <br />

            <label> Why do you want to be a Mars expawlorer?</label>
            <p id="input1">
              * We ask you to pawlease put your best paw furward and purrsuade
              us
            </p>

            <textarea
              id="inputBox1"
              name="texts"
              type="text"
              onInput={this.handleInput}
              value={this.state.texts}
            />

            <br />
            <br />
            <MarsFormRadio
              clicked={this.handleChange}
              breathe={this.state.breathe}
              maritalStatus={this.state.maritalStatus}
              stress={this.state.stress}
              claustrophobic={this.state.claustrophobic}
            />
            <MarsMissionCheckBox
              checked={this.handleChange}
              famHistory={this.state.famHistory}
              famLine={this.state.famLine}
              education={this.state.education}
            />
            <button onClick={this.handleSubmit} id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else if (this.state.formSubmitted === true) {
      let results = (
        <Results
          submitted={this.handleSubmit}
          completed={this.handleComplete}
          name={this.state.name}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          country={this.state.country}
          diet={this.state.diet}
          texts={this.state.texts}
          breathe={this.state.breathe}
          maritalStatus={this.state.maritalStatus}
          stress={this.state.stress}
          claustrophobic={this.state.claustrophobic}
          famHistory={this.state.famHistory}
          famLine={this.state.famLine}
          education={this.state.education}
        />
      );

      return (
        <div className="mainFrame">
          <h1> Mission to Mars </h1>
          <p id="starTrek">
            {" "}
            “Space: the final furrontier. These are the voyages of the starship
            Enterpurrise. Its continuing mission: to expawlore strange new
            worlds,to seek out new one of your 9 lives and new civilizations, to
            boldly go where hiss no one has gone befure.”{" "}
          </p>
          <br />
          {results}
        </div>
      );
    } else {
      return <p>Thank you for Applying! </p>;
    }
  }
}

export default MarsForm;
