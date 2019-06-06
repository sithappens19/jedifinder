import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Button } from "../.";

const stories = storiesOf("Button", module);

stories.addDecorator(withA11y);

stories.add("Default", () => (
    <Button onClick={action("onClick")} primary={boolean("Primary", false)}>
        {text("Text", "Example Button")}
    </Button>
));

stories.add("Primary", () => (
    <Button onClick={action("onClick")} primary={boolean("Primary", true)}>
        {text("Text", "Example Button")}
    </Button>
));
