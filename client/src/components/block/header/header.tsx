import { FC } from 'react';
import styles from './header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    Header Component
  </div>
);

export default Header;
