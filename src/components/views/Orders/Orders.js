import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Orders.scss';

const Orders = props => (
  <div className={styles.component}>
    <h2>Orders view</h2>
    <Link to='/ordering/order/123abc'>Single Order</Link>
    <Link to='/ordering/new'>New Order</Link>
  </div>
);

export default Orders;