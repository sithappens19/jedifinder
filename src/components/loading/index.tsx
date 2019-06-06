import { BaseHTMLAttributes } from "react";
import styled from "styled-components";

export type LoadingProps = BaseHTMLAttributes<HTMLDivElement>;

export const Loading = styled.div<LoadingProps>`
    background: #ff0000;
    height: 100px;
    width: 100px;
`;
