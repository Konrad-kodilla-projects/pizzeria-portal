import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './PageNav.scss';

const PageNav = props => (
  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.navLink}>
      Home
    </NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.navLink}>
      Login
    </NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' className={styles.navLink}>
      Orders
    </NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.navLink}>
      Kitchen
    </NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className={styles.navLink}>
      Tables
    </NavLink>
  </nav>
);

export default PageNav;
