import React, { ImgHTMLAttributes } from "react";
import styled from "styled-components";

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement>;

const StyledAvatar = styled.img<AvatarProps>`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: 1px solid #ccc;
    margin: 0 auto;
`;

export const Avatar: React.FunctionComponent<AvatarProps> = props => {
    return <StyledAvatar {...props} />;
};
