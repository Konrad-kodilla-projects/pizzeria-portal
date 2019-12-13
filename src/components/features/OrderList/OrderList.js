import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './OrderList.module.scss';

const OrderList = ({ orderID, status, date, total }) => {
  let btn;

  if (status === 'ready') {
    btn = (
      <FontAwesomeIcon icon={faCheck} />
    );
  }

  if (status !== 'done' && status !== 'cancelled') {
    return (
      <TableRow>
        <TableCell>{orderID}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>${total}</TableCell>
        <TableCell className={styles.icon}>{btn}</TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};

export default OrderList;
