import { useEffect, useState } from "react";
import { Artist } from '../../models';
// import styles from './artist-list.module.css';
import{ artistService } from '../../services';
import List from '../../components/block/list/list';
// interface ArtistListProps {}

// const ArtistList: FC<ArtistListProps> = () => (
//   <div className={styles.ArtistList}>
//     ArtistList Component
//   </div>
// );


function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const unit = 10
  useEffect(() => {
    artistService
      .fetchAll(unit)
      .then((res:Artist[]) => setArtists(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <List items={artists} />
    </div>
  );
}

export default ArtistList;
