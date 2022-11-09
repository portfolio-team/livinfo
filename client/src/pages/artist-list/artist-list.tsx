// import { useState } from "react";
// import { Artist } from '../../models';
// import styles from './artist-list.module.css';
// import{ artistService } from '../../services';
import { useArtistListFacade } from './artist-list.facade';
import List from '../../components/block/list/list';
// interface ArtistListProps {}

// const ArtistList: FC<ArtistListProps> = () => (
//   <div className={styles.ArtistList}>
//     ArtistList Component
//   </div>
// );

function ArtistList(){
  // const [artists, setArtists] = useState<Artist[]>([]);
  const offset = 10;
  const { artists } = useArtistListFacade({
    offset
  });

  // useEffectでfetch処理を行う
  // useEffect(() => {
  //   // 非同期処理の場合は、関数を定義しそれを呼び出すような形式で記述すること
  //   const fetch = () => {
  //     artistService
  //       .fetchAll(unit)
  //       .then((res:Artist[]) => setArtists(res))
  //       .catch((error) => console.log(error));
  //   }
  //   fetchAll(unit)
  // }, [])

  return (
    <div>
      <p>artistList</p>
      <List items={artists} />
    </div>
  );
}

export default ArtistList;
