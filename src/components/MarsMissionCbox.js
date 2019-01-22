import React from 'react';

const MarsMissionCheckBox = props => {
  // console.log(props.checked);
  return (
    <form>
      <div className="famHistory">
        <p> Does your family have a history of (check all that appawly): </p>

        <input
          type="checkbox"
          name="famHistory"
          id="cancer"
          value="Cancer"
          onChange={props.checked}
        />
        <label htmlFor="cancer"> Feline Cancer </label>

        <input
          type="checkbox"
          name="famHistory"
          id="heart"
          value="heart"
          onChange={props.checked}
        />
        <label htmlFor="heart"> Feline Heart Disease </label>

        <input
          type="checkbox"
          name="famHistory"
          id="ciatebtes"
          value="catibetes"
          onChange={props.checked}
        />
        <label htmlFor="catibetes"> Catibetes </label>
      </div>

      <div className="famLine">
        <p> Do you have any living (check all that appawly): </p>

        <input
          type="checkbox"
          name="famLine"
          id="Siblings"
          value="Siblings"
          onChange={props.checked}
        />
        <label htmlFor="Siblings"> Siblings </label>

        <input
          type="checkbox"
          name="famLine"
          id="Purents"
          value="Purents"
          onChange={props.checked}
        />
        <label htmlFor="Purents"> Purents </label>

        <input
          type="checkbox"
          name="famLine"
          id="Grandpurrents"
          value="Grandpurrents"
          onChange={props.checked}
        />
        <label htmlFor="Grandpurrents"> Grandpurrents </label>
      </div>

      <div className="education">
        <ul>
          <p> Check all educational credentials you have received: </p>
          <li>
            <input
              type="checkbox"
              name="education"
              id="highschool"
              value="highschool"
              onChange={props.checked}
            />
            <label htmlFor="Siblings">
              {' '}
              High School dipawloma or GED equivalen{' '}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="education"
              id="associates"
              value="associates"
              onChange={props.checked}
            />
            <label htmlFor="associates"> Associates Degree </label>
          </li>

          <li>
            <input
              type="checkbox"
              name="education"
              id="bachelors"
              value="bachelors"
              onChange={props.checked}
            />
            <label htmlFor="bachelors"> Bachelors Degree </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="education"
              id="masters"
              value="masters"
              onChange={props.checked}
            />
            <label htmlFor="masters"> Masters Degree </label>
          </li>

          <li>
            <input
              type="checkbox"
              name="education"
              id="phd"
              value="phd"
              onChange={props.checked}
            />
            <label htmlFor="phd"> PhD </label>
          </li>

          <li>
            <label htmlFor="other"> Other: </label>
            <input
              type="text"
              name="education"
              id="other"
              onChange={props.checked}
            />
          </li>
        </ul>
      </div>
    </form>
  );
};

export default MarsMissionCheckBox;
