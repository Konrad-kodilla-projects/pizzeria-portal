import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './OrderList.module.scss';

const OrderList = ({ orderID, status, date, total, history }) => {
  let btn, readyClass;

  if (status === 'ready') {
    readyClass = styles.ready;
    btn = (
      <div className={styles.iconBox}>
        <FontAwesomeIcon className={styles.icon} icon={faCheck} />
      </div>
    );
  }

  if (status !== 'done' && status !== 'cancelled') {
    return (
      <TableRow
        className={readyClass + ' ' + styles.row}
        onClick={() => history.push(`/ordering/order/${orderID}`)}
      >
        <TableCell>{orderID}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>${total}</TableCell>
        <TableCell>{btn}</TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};

export default OrderList;
