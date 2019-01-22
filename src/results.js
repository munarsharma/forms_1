import React from "react";

const Results = props => {
  console.log("this is", props);
  return (
    <div>
      <h2> Confirm information: </h2>
      <p> Full Name: {props.name}</p>
      <p>Date Of Birth: {props.month}</p>
      <p>{props.days}</p> <p>{props.years}</p>
      <p> Country Of Origin: {props.country} </p>
      <p> Dietary Purrefurence: {props.diet} </p>
      <p> Why do you want to be a Mars expawlorer? {props.texts} </p>
      <button onClick={props.handleComplete}> Submit Application </button>
    </div>
  );
};

export default Results;
