import { shallow } from "enzyme";
import React from "react";
import { App } from "../.";

it("renders without crashing", () => {
    shallow(<App />);
});
