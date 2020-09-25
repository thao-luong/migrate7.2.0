import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "@gooddata/react-components/styles/css/main.css";

import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

import styles from "./AppRouter.module.scss";
import Welcome from "./Welcome";
import Basic from "./BasicComponent";
import Pivot from "./PivotTable";
import Sorting from "./Sorting";
import Insight from "./Insight";
import Comparison from "./TimeOverTime"
import Filters from "./Filters"
import Executes from "./Execute"
import Export from "./Export"
import Page from "../components/Page";

// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../context/auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                {/* DELETE THIS LINE */} <Redirect to="/basic-component"/>
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/basic-component" component={Basic} />
                <Route exact path="/pivot" component={Pivot} />
                <Route exact path="/sorting" component={Sorting} />
                <Route exact path="/insight-view" component={Insight} />
                <Route exact path="/time-over-time" component={Comparison} />
                <Route exact path="/filters" component={Filters} />
                <Route exact path="/execute" component={Executes} />
                <Route exact path="/export" component={Export} />
                {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                {/* <RedirectIfNotLoggedIn /> */}
            </Router>
        </div>
    );
};

export default AppRouter;
