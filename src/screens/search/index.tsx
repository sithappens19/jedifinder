import React from "react";
import { SearchResults } from "../../components/search-results";
import { SearchSummary } from "../../components/search-summary";
import { UserCard } from "../../components/user-card";

export const Home: React.FunctionComponent = () => {
    const userCards = [];
    for (var i = 0; i < 40; i++) {
        userCards.push(<UserCard key={i} />);
    }

    return (
        <>
            <SearchSummary>
                <h1 style={{ color: "#502979" }}>Search Results</h1>

                <h3 style={{ color: "#333" }}>
                    Your search for "Java" returned 372 results.
                </h3>
            </SearchSummary>

            <SearchResults>{userCards}</SearchResults>
        </>
    );
};

// eslint-disable-next-line import/no-default-export
export default Home;
