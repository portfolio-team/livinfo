import React, { FC } from 'react';
import styles from './artist-list.module.css';

interface ArtistListProps {}

const ArtistList: FC<ArtistListProps> = () => (
  <div className={styles.ArtistList}>
    ArtistList Component
  </div>
);

export default ArtistList;
