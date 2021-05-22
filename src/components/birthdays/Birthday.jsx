import React from "react";

const Birthday = ({ user: { dob, firstName, lastName }, month }) => {
  const DateString = () => {
    const d = new Date(dob);
    return ("0" + d.getDate()).slice(-2) + " " + month + " " + d.getFullYear();
  };

  return (
    <li>
      {firstName} {lastName} - <DateString />
    </li>
  );
};

export default Birthday;
