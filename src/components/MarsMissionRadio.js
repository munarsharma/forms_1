import React from "react";

const MarsFormRadio = props => {
  return (
    <div>
      <form>
        <p> Can you breathe underwater longer than 1 minute? </p>

        <div className="breathe">
          <label htmlFor="yes"> Yes </label>
          <input
            type="radio"
            id="yes"
            name="breathe"
            value="yes"
            onChange={props.clicked}
          />
          <label htmlFor="No"> No </label>
          <input
            type="radio"
            id="No"
            name="breathe"
            value="No"
            onChange={props.clicked}
          />
          <label htmlFor="idk"> I dont know </label>
          <input
            type="radio"
            id="idk"
            name="breathe"
            value="I dont meow"
            onChange={props.clicked}
          />
        </div>

        <div className="maritalStatus">
          <p> What is your marital status? </p>

          <label htmlFor="married"> Married </label>
          <input
            type="radio"
            id="married"
            name="maritalStatus"
            value="Married"
            onChange={props.clicked}
          />
          <label htmlFor="unmarried"> Unmarried </label>
          <input
            type="radio"
            id="unmarried"
            name="maritalStatus"
            value="Unmarried"
            onChange={props.clicked}
          />
        </div>

        <div className="stress">
          <p>
            {" "}
            When you are in a stressful or difficult situation, how do you most
            furrequently react?{" "}
          </p>
          <ul>
            <li>
              <label htmlFor="determination">
                {" "}
                <input
                  type="radio"
                  id="determination"
                  name="stress"
                  value="determination"
                  onChange={props.clicked}
                />
                Determination: I continue to confurront the situation{" "}
              </label>
            </li>
            <li>
              {" "}
              <input
                type="radio"
                id="defeat"
                name="stress"
                value="defeat"
                onChange={props.clicked}
              />
              <label htmlFor="defeat">
                {" "}
                Defeat: I stop confurronting the situation.{" "}
              </label>
            </li>
            <li>
              {" "}
              <input
                type="radio"
                id="anger"
                name="stress"
                value="anger"
                onChange={props.clicked}
              />
              <label htmlFor="anger">
                {" "}
                Anger: I become upset at the situation.{" "}
              </label>
            </li>
            <li>
              {" "}
              <input
                type="radio"
                id="  Resourcefulness"
                name="stress"
                value="  Resourcefulness"
                onChange={props.clicked}
              />
              <label htmlFor="  Resourcefulness">
                {" "}
                Resourcefulness: I seek help to confurront the situation.{" "}
              </label>
            </li>
          </ul>
        </div>

        <div className="claustrophobic">
          <p> Are you claustrophobic? </p>

          <label htmlFor="yes"> Yes </label>
          <input
            type="radio"
            id="yes"
            name="claustrophobic"
            value="yes"
            onChange={props.clicked}
          />
          <label htmlFor="no"> No </label>
          <input
            type="radio"
            id="no"
            name="claustrophobic"
            value="no"
            onChange={props.clicked}
          />
          <label htmlFor="idk"> I dont meow </label>
          <input
            type="radio"
            id="idk"
            name="claustrophobic"
            value="idk"
            onChange={props.clicked}
          />
        </div>
      </form>
    </div>
  );
};

export default MarsFormRadio;
