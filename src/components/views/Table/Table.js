import React from 'react';
import PropTypes from 'prop-types';

import styles from './Table.scss';

const Table = props => (
  <div className={styles.component}>
    <h2>Table view</h2>
    {props.match.params.id}
  </div>
);

export default Table;