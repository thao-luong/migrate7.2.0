import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to="/basic-component" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic Component
            </NavLink>
            <NavLink to="/pivot" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Pivot Table
            </NavLink>
            <NavLink to="/sorting" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Sorting
            </NavLink>
            <NavLink to="/insight-view" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Insight View
            </NavLink>
            <NavLink to="/time-over-time" className={styles.Link} activeClassName={styles.LinkActive} exact>
                PoP
            </NavLink>
            <NavLink to="/filters" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Filters
            </NavLink>
            <NavLink to="/execute" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Execute
            </NavLink>
            <NavLink to="/export" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Export
            </NavLink>
        </>
    );
};

export default Links;
