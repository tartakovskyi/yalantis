import React from "react";
import { render } from "@testing-library/react";
import Letter from "../Letter";
import Employee from "../Employee";

jest.mock("../Employee", () => () => <li data-testid="employee">Employee</li>);

test("Letter should render correctly", () => {
  const letter = "H";
  const users = {
    "5e00928dba3201e530e3f9d1": {
      id: "5e00928dba3201e530e3f9d1",
      firstName: "Addie",
      lastName: "Harrington",
      dob: "2019-06-06T20:32:36.719Z",
    },
    "5e00928deed9b7022ce33839": {
      id: "5e00928deed9b7022ce33839",
      firstName: "Logan",
      lastName: "Holcomb",
      dob: "2019-09-07T08:33:06.470Z",
    },
    "5e00928d8b879ab59b26a59c": {
      id: "5e00928d8b879ab59b26a59c",
      firstName: "Medina",
      lastName: "Holmes",
      dob: "2019-09-24T00:47:33.894Z",
    },
  };

  const { container, getAllByTestId } = render(
    <Letter letter={letter} users={users} />
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(getAllByTestId("employee").length).toBe(Object.keys(users).length);
});
