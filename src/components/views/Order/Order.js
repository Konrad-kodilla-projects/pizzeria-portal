import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.scss';

const Order = props => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {props.match.params.id}
  </div>
);

export default Order;