import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import {
  Fab,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';

import OrderList from '../OrderList/OrderList';
import styles from './TableList.module.scss';

const TableList = ({ tableID, orders }) => (
  <div className={styles.table}>
    <Paper>
      <h3 className={styles.title}>{tableID}</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Deliver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((orderProps, id) => (
            <OrderList key={id} {...orderProps} />
          ))}
        </TableBody>
      </Table>
      <Fab size='small' color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
    </Paper>
  </div>
);

export default TableList;
