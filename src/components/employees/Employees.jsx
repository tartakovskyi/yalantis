import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

const Employees = () => {
  const { usersByAlphabet } = useContext(AppContext);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="col-7">
      <h2>Employees</h2>
      <div className="row">
        {alphabet.map((letter) => (
          <Letter
            letter={letter}
            users={usersByAlphabet[letter]}
            key={letter}
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
