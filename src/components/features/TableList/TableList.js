import React from 'react';
import { Link } from 'react-router-dom';

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

const TableList = ({ tableID, orders, history }) => (
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
            <OrderList key={id} {...orderProps}  history={history}/>
          ))}
        </TableBody>
      </Table>
      <div className={styles.add}>
        <Link className={styles.btnOrder} to='/ordering/new'>
        <Fab size='small' color='primary' aria-label='add'>
          <AddIcon />
        </Fab>

        </Link>
      </div>
    </Paper>
  </div>
);

export default TableList;
