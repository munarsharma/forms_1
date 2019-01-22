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
      <p> Can you breathe underwater longer than 1 minute? {props.breathe} </p>
      <p> What is your marital status? {props.maritalStatus} </p>
      <p>
        {" "}
        When you are in a stressful or difficult situation, how do you most
        furrequently react? {props.stress}{" "}
      </p>
      <p> Are you claustrophobic? {props.claustrophobic} </p>
      <p> Does your family have a history of: {props.famHistory} </p>
      <p>Do you have any living: {props.famLine} </p>
      <p> Level of Education: {props.education} </p>
      <button onClick={props.handleComplete}> Submit Application </button>
    </div>
  );
};

export default Results;
