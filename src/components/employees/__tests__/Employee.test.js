import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AppContext } from "../../App";
import Employee from "../Employee";

Enzyme.configure({ adapter: new Adapter() });

describe("<Employee />", () => {
  let wrapper;
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
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(
      <AppContext.Provider value={{ activeUsers, changeUserStatus }}>
        <Employee user={user} />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Snapshot", () => {
    it("Employee should render correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Change Status", () => {
    it("Change radio button value", () => {
      wrapper.find(`[id^="#notActive_"]`).simulate("click");

      //expect(radio.value).toBe("1");
      expect(wrapper.find(".employee__name.active").length).toBe(1);
      expect(changeUserStatus).toHaveBeenCalled();
      expect(changeUserStatus).toHaveBeenCalledWith(user.id, 1);
      expect(setState).toHaveBeenCalled();
      expect(setState).toHaveBeenCalledWith(1);
    });
  });
});
