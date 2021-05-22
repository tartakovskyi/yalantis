import React from "react";
import Birthday from "./Birthday";

const Month = ({ name, users }) => {
  return (
    <li className="month">
      <h4 className="month__name">{name}</h4>
      <ul>
        {users.map((user) => (
          <Birthday user={user} month={name} key={user.id} />
        ))}
      </ul>
    </li>
  );
};

export default Month;
