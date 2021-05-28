import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import Employees from "../employees/Employees";
import EmployeesBirthday from "../birthdays/EmployeesBirthday";

test("App should render correctly", () => {
  const { container, getByTestId } = render(<App />);

  expect(container.firstChild).toMatchSnapshot();
});
