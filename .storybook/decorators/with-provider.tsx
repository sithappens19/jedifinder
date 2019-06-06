import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../src/themes";

const withProvider = story => (
    <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
);

export default withProvider;
