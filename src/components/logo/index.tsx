import React from "react";
import styled from "styled-components";

export type LogoProps = any;

const StyledLogo = styled.h1<LogoProps>`
    font-size: 30px;
    color: #fff;
    margin: 12px 0;
`;

export const Logo: React.FunctionComponent<LogoProps> = props => {
    return <StyledLogo {...props}>Skill Finder</StyledLogo>;
};
