import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type ProfileProps = RouteComponentProps;

export const Profile: React.FunctionComponent<ProfileProps> = () => (
    <>
        <h2>Profile</h2>

        <Link to={`/`}>Back to Search</Link>
    </>
);

// eslint-disable-next-line import/no-default-export
export default Profile;
