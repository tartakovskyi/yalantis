import React from "react";
import { render } from "@testing-library/react";
import { AppContext } from "../../App";
import Employees from "../Employees";
import Letter from "../Letter";

jest.mock("../Letter", () => () => <div data-testid="letter">Letter</div>);

test("Employees should render correctly", () => {
  const usersByAlphabet = {
    A: {
      "5e00928d1a9ac4bd431ff876": {
        id: "5e00928d1a9ac4bd431ff876",
        firstName: "Toni",
        lastName: "Albert",
        dob: "2019-03-23T01:30:35.337Z",
      },
      "5e00928dd8564cf882f0bb6a": {
        id: "5e00928dd8564cf882f0bb6a",
        firstName: "Felicia",
        lastName: "Ayers",
        dob: "2019-06-05T11:12:29.457Z",
      },
    },
    B: {
      "5e00928d94a2f84667b9316e": {
        id: "5e00928d94a2f84667b9316e",
        firstName: "Neal",
        lastName: "Brennan",
        dob: "2019-04-06T18:14:33.924Z",
      },
      "5e00928d751881156e9c3c98": {
        id: "5e00928d751881156e9c3c98",
        firstName: "Clements",
        lastName: "Ballard",
        dob: "2019-04-09T19:23:23.170Z",
      },
      "5e00928d7c7af1a3dcf6c5ba": {
        id: "5e00928d7c7af1a3dcf6c5ba",
        firstName: "Frieda",
        lastName: "Berry",
        dob: "2019-04-30T21:37:53.999Z",
      },
      "5e00928d4ccfaddc325db989": {
        id: "5e00928d4ccfaddc325db989",
        firstName: "Johnson",
        lastName: "Bond",
        dob: "2019-04-24T19:58:22.251Z",
      },
      "5e00928dac694570760105c4": {
        id: "5e00928dac694570760105c4",
        firstName: "Molina",
        lastName: "Baird",
        dob: "2019-01-07T03:26:17.817Z",
      },
      "5e00928db33d3d21c1ce0912": {
        id: "5e00928db33d3d21c1ce0912",
        firstName: "Emily",
        lastName: "Bender",
        dob: "2019-03-27T07:46:03.343Z",
      },
      "5e00928d2b38f636f2600802": {
        id: "5e00928d2b38f636f2600802",
        firstName: "Laurel",
        lastName: "Bonner",
        dob: "2019-03-31T15:49:58.753Z",
      },
      "5e00928df742faf8527ded34": {
        id: "5e00928df742faf8527ded34",
        firstName: "Jackie",
        lastName: "Britt",
        dob: "2019-02-05T01:54:43.832Z",
      },
      "5e00928deee1b67fa4c44a2a": {
        id: "5e00928deee1b67fa4c44a2a",
        firstName: "Bradshaw",
        lastName: "Bass",
        dob: "2019-11-07T10:02:56.514Z",
      },
      "5e00928d47d38b9000034a60": {
        id: "5e00928d47d38b9000034a60",
        firstName: "Frye",
        lastName: "Burt",
        dob: "2019-08-18T09:24:01.221Z",
      },
      "5e00928d9b95d92f382e6f91": {
        id: "5e00928d9b95d92f382e6f91",
        firstName: "Kendra",
        lastName: "Blair",
        dob: "2019-05-18T09:30:01.618Z",
      },
      "5e00928dcfea7dd7d436a9f8": {
        id: "5e00928dcfea7dd7d436a9f8",
        firstName: "Dolores",
        lastName: "Bryan",
        dob: "2019-06-07T16:41:34.639Z",
      },
      "5e00928df3f5ec0978d90ce7": {
        id: "5e00928df3f5ec0978d90ce7",
        firstName: "Madeleine",
        lastName: "Brooks",
        dob: "2019-05-12T01:20:34.085Z",
      },
      "5e00928ddf2b0005894623cf": {
        id: "5e00928ddf2b0005894623cf",
        firstName: "Lea",
        lastName: "Berger",
        dob: "2019-04-20T06:59:40.430Z",
      },
      "5e00928dc22a048bfcc6632e": {
        id: "5e00928dc22a048bfcc6632e",
        firstName: "Dunlap",
        lastName: "Beasley",
        dob: "2019-03-30T20:36:35.262Z",
      },
    },
  };

  const { container, getAllByTestId } = render(
    <AppContext.Provider value={{ usersByAlphabet }}>
      <Employees />
    </AppContext.Provider>
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(getAllByTestId("letter").length).toBe(26);
});
