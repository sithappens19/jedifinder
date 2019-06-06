import React from "react";
import styled from "styled-components";

export interface SearchResultsProps {
    children: React.ReactNode;
}

const StyledSearchResults = styled.div<SearchResultsProps>`
    margin: 0 auto;
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

export const SearchResults: React.FunctionComponent<SearchResultsProps> = ({
    children
}) => {
    return <StyledSearchResults>{children}</StyledSearchResults>;
};
