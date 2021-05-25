import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../App";

const Employee = ({ user: { id, firstName, lastName } }) => {
  const { activeUsers, changeUserStatus } = useContext(AppContext);
  const [active, setActive] = useState(activeUsers.includes(id) ? 1 : 0);

  const cls = active === 0 ? "employee__name" : "employee__name active";

  const onChangeValue = (e) => {
    const value = Number(e.target.value);
    setActive(value);
    changeUserStatus(id, value);
  };

  return (
    <li className="employee">
      <h4 className={cls}>
        {firstName} {lastName}
      </h4>
      <form>
        <label className="form-check">
          <input
            type="radio"
            name={`active_${id}`}
            value="0"
            id={`notActive_${id}`}
            className="form-check-input"
            onChange={onChangeValue}
            checked={active === 0}
          />
          <span className="form-check-label">not active</span>
        </label>
        <label className="form-check">
          <input
            type="radio"
            name={`active_${id}`}
            value="1"
            id={`active_${id}`}
            className="form-check-input"
            onChange={onChangeValue}
            checked={active === 1}
          />
          <span className="form-check-label">active</span>
        </label>
      </form>
    </li>
  );
};

Employee.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Employee;
