import React from "react";
import styled, { css } from "styled-components";

export type StyledSearchInputProps = any;

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
    background: white;
    border: 2px solid #555;
    border-radius: ${props => props.theme.borderRadius};
    font-size: 14px;
    padding: 10px;
    height: 40px;
    margin: 10px 0;

    ${props =>
        props.primary &&
        css`
            background: green;
            border: none;
            color: #fff;
            padding: 12px;
        `}
`;

export const SearchInput: React.FunctionComponent<
    StyledSearchInputProps
> = props => {
    return <StyledSearchInput {...props} value="Java" />;
};
