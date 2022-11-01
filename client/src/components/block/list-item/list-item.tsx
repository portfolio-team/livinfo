import { useEffect, useState } from "react";
// import styles from './list-item.module.css';
import { Artist } from '../../../models';


type ListItemPropsType = {
  item: Artist
};


function ListItem(props: ListItemPropsType) {
  const [listItem, setItem] = useState<Artist>(props.item);

  useEffect(() => {
    setItem(props.item)
  }, []);

  return (
    <article>
      <div className="mask">
        <a href={listItem.slug} className="mask-img" title="how-to-build-a-wordpress-website-cover">
          <img src={listItem.image} alt=""/>
        </a>
      </div>
      <div className="meta">
        <div>
          { listItem.name }
        </div>
        <div>
          { listItem.nationality }
        </div>
      </div>
    </article>
  );
}

export default ListItem;
