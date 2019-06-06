import { shallow } from "enzyme";
import "jest-styled-components";
import puppeteer, { Browser } from "puppeteer";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { Button } from "../.";
import { defaultTheme } from "../../../themes";

const renderWithTheme = (component: any) => {
    return renderer.create(
        <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
    );
};

describe("button", () => {
    let browser: Browser;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage"
            ]
        });
    });

    test("default button renders correctly", () => {
        const tree = renderWithTheme(<Button>Example Button</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("primary button renders correctly", () => {
        const tree = renderWithTheme(
            <Button primary>Example Button</Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test("onClick handler is called when button is clicked", () => {
        const onClick = jest.fn();

        const wrapper = shallow(
            <Button onClick={onClick}>Example Button</Button>
        );

        wrapper.simulate("click");

        expect(onClick).toHaveBeenCalled();
    });

    test("default button visually looks correct", async () => {
        const page = await browser.newPage();
        await page.goto("http://localhost:6006/iframe.html?id=button--default");
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    test("primary button visually looks correct", async () => {
        const page = await browser.newPage();
        await page.goto("http://localhost:6006/iframe.html?id=button--primary");
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    afterAll(async () => {
        await browser.close();
    });
});
