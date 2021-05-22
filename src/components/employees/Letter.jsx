import React from "react";
import PropTypes from "prop-types";
import { sortByLastName } from "../../utils";
import Employee from "./Employee";

const Letter = ({ letter, users }) => {
  const usersArr = Object.values(users).sort(sortByLastName);

  return (
    <div className="col-4">
      <h3>{letter}</h3>
      {usersArr.length ? (
        <ul className="users-list">
          {usersArr.map((user) => (
            <Employee user={user} key={user.id} />
          ))}
        </ul>
      ) : (
        <hr className="no-users" />
      )}
    </div>
  );
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
};

export default Letter;
