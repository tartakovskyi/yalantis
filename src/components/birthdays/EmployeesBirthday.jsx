import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import Month from "./Month";

const EmployeesBirthday = () => {
  const { usersRaw, activeUsers } = useContext(AppContext);
  const [birthdaysByMonth, setBirthdaysByMonth] = useState({});
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let usersObj = {};
    usersRaw.forEach((user) => {
      if (activeUsers.includes(user.id)) {
        const month = user.dob.replace(/([0-9]+)-([0-9]+)-(.*)/, "$2");
        if (usersObj.hasOwnProperty(month)) {
          usersObj[month].push(user);
        } else {
          usersObj[month] = [user];
        }
      }
    });
    setBirthdaysByMonth(usersObj);
  }, [usersRaw, activeUsers]);

  const birthdaysArr = Object.keys(birthdaysByMonth).sort();

  return (
    <div className="col-5">
      <h2>Employees Birthday</h2>
      {birthdaysArr.length ? (
        <ul className="birthdays-list">
          {birthdaysArr.map((month) => (
            <Month
              name={monthNames[month - 1]}
              users={birthdaysByMonth[month]}
              key={month}
            />
          ))}
        </ul>
      ) : (
        <p>Employees List is empty</p>
      )}
    </div>
  );
};

export default EmployeesBirthday;
