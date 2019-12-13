import React, { useState } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './OrderList.module.scss';

const OrderList = ({ orderID, status, date, total, history }) => {
  let btn, readyClass;
  const [newStatus, setStatus] = useState(status);
  const changeRoute = () => history.push(`/ordering/order/${orderID}`);

  if (newStatus === 'ready') {
    readyClass = styles.ready;
    btn = (
      <TableCell id={styles.iconCell}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCheck}
            onClick={() => setStatus('delivered')}
          />
        </div>
      </TableCell>
    );
  }

  if (status !== 'done' && status !== 'cancelled') {
    return (
      <TableRow
        className={readyClass + ' ' + styles.row}
      >
        {/* wrzuciłem te onClicki to każdej komórki bo jak było tylko w rodzicu to nie 
        można było kliknąć buttona więc zrobiłem to trochę na piechotę ale na lepszy pomysł
        nie wpadłem :) */}
        <TableCell onClick={changeRoute}>{orderID}</TableCell>
        <TableCell onClick={changeRoute}>{newStatus}</TableCell>
        <TableCell onClick={changeRoute}>{date}</TableCell>
        <TableCell onClick={changeRoute}>${total}</TableCell>
        {btn ? btn : <TableCell onClick={changeRoute}></TableCell>}
      </TableRow>
    );
  } else {
    return null;
  }
};

export default OrderList;
