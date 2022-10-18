import { useEffect, useState } from "react";
import { Artist } from '../../models';
// import styles from './artist-list.module.css';
import{ artistService } from '../../services';

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
    <div className="App">
      <ul>
          { artists.map((artist: Artist) => <li>{artist.name}</li>)}
      </ul>
    </div>
  );
}

export default ArtistList;
