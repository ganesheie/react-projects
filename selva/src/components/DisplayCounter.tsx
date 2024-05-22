import React from "react";
import Button from "./Button";

const DisplayCounter = ({ counter, handleClick }) => {
  return (
    <React.Fragment>
      <h1>Hello React World!!! now {counter}</h1>
      <Button handleClick={handleClick} />
    </React.Fragment>
  );
};

export default DisplayCounter;
