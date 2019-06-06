import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "../../components/header";
import { Loading } from "../../components/loading";
import { defaultTheme } from "../../themes";

const Search = React.lazy(() => import("../../screens/search"));
const Profile = React.lazy(() => import("../../screens/profile"));
const Error = React.lazy(() => import("../../screens/error"));

export const App: React.FunctionComponent = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Router>
                <div>
                    <Header />

                    <React.Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/" exact component={Search} />
                            <Route path="/profile" component={Profile} />
                            <Route component={Error} />
                        </Switch>
                    </React.Suspense>
                </div>
            </Router>
        </ThemeProvider>
    );
};
