import { useEffect, useState } from "react";
import styles from './list-item.module.css';
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
      <div class="mask">
        <a href="listItem.image" class="mask-img" title="how-to-build-a-wordpress-website-cover">
          <img src="listItem.image" alt=""/>
        </a>
      </div>
      <div class="meta">
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
