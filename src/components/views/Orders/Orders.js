import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import TableList from '../../features/TableList/TableList';

import styles from './Orders.module.scss';
import { orders } from '../../../data/MockData';

const Orders = props => (
  <div className={styles.component}>
    <h2>Orders view</h2>
    <div className={styles.tableBox}>
      {orders.map((tableProps, id) => (
        <TableList key={id} {...tableProps} history={props.history}/>
      ))}
    </div>
  </div>
);

export default Orders;
