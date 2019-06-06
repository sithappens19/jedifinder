import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background: white;
    border: 2px solid #555;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.colors.primary};
    font-size: 14px;
    padding: 10px;

    ${props =>
        props.primary &&
        css`
            background: green;
            border: none;
            color: #fff;
            padding: 12px;
        `}
`;
