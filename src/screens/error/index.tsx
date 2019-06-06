import React from "react";
import { RouteProps } from "react-router-dom";

export type ErrorProps = RouteProps;

export const Error: React.FunctionComponent<ErrorProps> = ({ location }) => (
    <>
        <h2>Error</h2>

        {location && (
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        )}
    </>
);

// eslint-disable-next-line import/no-default-export
export default Error;
