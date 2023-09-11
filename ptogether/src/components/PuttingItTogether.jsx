import React, { useState } from 'react';


function PersonCard(props) {
  const [age, setAge] = useState(props.age);

  // const newAge = () => {
  //   setAge(age + 1);
  // };

  return (
    <div className="person-card">
      <h2>{props.lastName} {props.firstName} </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={e => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default PersonCard;