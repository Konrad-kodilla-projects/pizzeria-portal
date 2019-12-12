import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Tables.scss';

const Tables = props => (
  <div className={styles.component}>
    <Link to='/tables/booking/123abc'>Single Booking</Link>
    <Link to='/tables/booking/123abc'>Single Event</Link>
    <h2>Tables view</h2>
  </div>
);

export default Tables;