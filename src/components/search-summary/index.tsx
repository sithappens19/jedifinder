import React from "react";
import styled from "styled-components";

export interface SearchSummaryProps {
    children: React.ReactNode;
}

const StyledSearchSummary = styled.div<SearchSummaryProps>`
    margin: 30px auto;
    width: 1200px;
`;

export const SearchSummary: React.FunctionComponent<SearchSummaryProps> = ({
    children
}) => {
    return <StyledSearchSummary>{children}</StyledSearchSummary>;
};
