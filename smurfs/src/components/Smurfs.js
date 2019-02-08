import React from "react";

import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
          />
        );
      })}
    </ul>
  );
};

export default Smurfs;
