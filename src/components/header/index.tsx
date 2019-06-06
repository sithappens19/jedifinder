import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export type HeaderProps = any;

const StyledHeader = styled.div<HeaderProps>`
    background: #eee;
    height: 60px;
    width: 100%;
`;

export const Header = () => (
    <StyledHeader>
        <h1>Jedi Finder</h1>

        <nav>
            <ul>
                <li>
                    <NavLink to="/">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    </StyledHeader>
);
