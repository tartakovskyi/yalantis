import React from "react";
import { render } from "@testing-library/react";
import Birthday from "../Birthday";
import Month from "../Month";

jest.mock("../Birthday", () => () => <li data-testid="birthday">Birthday</li>);

const users = [
  {
    id: "5e00928df3f5ec0978d90ce7",
    firstName: "Madeleine",
    lastName: "Brooks",
    dob: "2019-05-12T01:20:34.085Z",
  },
  {
    id: "5e00928db89ff9c2559f9560",
    firstName: "Watson",
    lastName: "Good",
    dob: "2019-05-09T03:24:32.532Z",
  },
  {
    id: "5e00928def1a7e201d4b676e",
    firstName: "Benita",
    lastName: "Welch",
    dob: "2019-05-28T01:05:52.237Z",
  },
];

test("Month should render correctly", () => {
  const { container, getAllByTestId } = render(
    <Month name="May" users={users} />
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(getAllByTestId("birthday").length).toBe(Object.keys(users).length);
});
