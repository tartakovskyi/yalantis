import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AppContext } from "../../App";
import Employee from "../Employee";

test("Employee should render correctly", () => {
  const user = {
    id: "5e00928d91e7feaa9872ec08",
    firstName: "Yang",
    lastName: "Carson",
    dob: "2019-02-26T16:52:36.244Z",
  };
  const activeUsers = [
    "5e00928dac694570760105c4",
    "5e00928deee1b67fa4c44a2a",
    "5e00928d1a9ac4bd431ff876",
    "5e00928d4267f8de85992159",
    "5e00928d8d97a843dbb05270",
    "5e00928d3939c957e9c63c2a",
  ];
  const changeUserStatus = jest.fn();

  const { container, getByLabelText } = render(
    <AppContext.Provider value={{ activeUsers, changeUserStatus }}>
      <Employee user={user} />
    </AppContext.Provider>
  );

  expect(container.firstChild).toMatchSnapshot();

  const radio = getByLabelText("active");
  fireEvent.change(radio, { target: { value: "0" } });
  expect(radio.value).toBe("0");
  expect(changeUserStatus).toHaveBeenCalled();
  expect(changeUserStatus).toHaveBeenCalledWith(user.id, 0);
});
