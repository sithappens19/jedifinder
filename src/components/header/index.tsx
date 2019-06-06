import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { SearchInput } from "../search-input";

export type HeaderProps = any;

const StyledHeader = styled.div<HeaderProps>`
    background: #502979;
    height: 60px;
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-gap: 100px;
`;

export const Header = () => (
    <StyledHeader>
        <Logo />

        <SearchInput />

        <Button>Update My Profile</Button>
    </StyledHeader>
);
