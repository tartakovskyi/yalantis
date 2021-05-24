import React from "react";
import { render } from "@testing-library/react";
import Employee from "../Employee";

test("Employee shold render correctly", () => {
	const user = {
		"id": "5e00928d91e7feaa9872ec08",
		"firstName": "Yang",
		"lastName": "Carson",
		"dob": "2019-02-26T16:52:36.244Z"
	}
	const {container} = render(<Employee user={user} />)

	expect(container.firstChild).matchToSnapShot();
});
