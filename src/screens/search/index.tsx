import React from "react";
import { SearchResults } from "../../components/search-results";
import { UserCard } from "../../components/user-card";

export const Home: React.FunctionComponent = () => {
    const userCards = [];
    for (var i = 0; i < 40; i++) {
        userCards.push(<UserCard key={i} />);
    }

    return (
        <>
            <h2>Search</h2>

            <SearchResults>{userCards}</SearchResults>
        </>
    );
};

// eslint-disable-next-line import/no-default-export
export default Home;
