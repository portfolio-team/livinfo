import React, { FC } from 'react';
import styles from './list.module.css';

interface ListProps {}

const List: FC<ListProps> = () => (
  <div className={styles.List}>
    List Component
  </div>
);

export default List;
