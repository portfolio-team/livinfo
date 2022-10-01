import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    Header Component
  </div>
);

export default Header;
