import React from "react";
import { render } from "@testing-library/react";
import Birthday from "../Birthday";

const user = {
  id: "5e00928df3f5ec0978d90ce7",
  firstName: "Madeleine",
  lastName: "Brooks",
  dob: "2019-05-12T01:20:34.085Z",
};

test("Birthday should render correctly", () => {
  const { container, getAllByTestId } = render(
    <Birthday month="May" user={user} />
  );

  expect(container.firstChild).toMatchSnapshot();
});
