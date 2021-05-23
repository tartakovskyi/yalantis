import React from "react";
import PropTypes from "prop-types";

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

Birthday.propTypes = {
  user: PropTypes.shape({
    dob: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  month: PropTypes.string.isRequired,
};

export default React.memo(Birthday);
