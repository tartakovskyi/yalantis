import React from "react";
import ReactDOM from "react-dom";
import Employee from "../Employee";

test("Employee shold render correctly", () => {
  const testContainer = document.createElement("div");
  ReactDOM.render(<Employee />, testContainer);

  expect(testContainer.querySelector("li").toHaveClass("employee"));
});
