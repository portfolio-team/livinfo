import { FC } from 'react';
import styles from './list-item.module.css';

interface ListItemProps {}

const ListItem: FC<ListItemProps> = () => (
  <div className={styles.ListItem}>
    ListItem Component
  </div>
);

export default ListItem;
