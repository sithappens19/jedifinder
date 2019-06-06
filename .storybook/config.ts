import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import withProvider from "./decorators/with-provider";

addDecorator(withProvider);
addDecorator(withKnobs);

function loadStories() {
    const req = require.context("../src/components", true, /\.stories\.tsx$/);

    req.keys().forEach(req);
}

configure(loadStories, module);
