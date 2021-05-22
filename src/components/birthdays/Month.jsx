import React from "react";
import PropTypes from "prop-types";
import { sortByLastName } from "../../utils";
import Birthday from "./Birthday";

const Month = ({ name, users }) => {
  const sortedUsers = users.sort(sortByLastName);

  return (
    <li className="month">
      <h4 className="month__name">{name}</h4>
      <ul>
        {sortedUsers.map((user) => (
          <Birthday user={user} month={name} key={user.id} />
        ))}
      </ul>
    </li>
  );
};

Month.propTypes = {
  name: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};

export default Month;
