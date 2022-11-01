// import { FC } from 'react';
import { useEffect, useState } from "react";
import { Artist } from '../../../models';
import ListItem from "../../block/list-item/list-item"
// import styles from './list.module.css';

type ListProps = {
  items: Artist[]
}

function List(props: ListProps) {
  const [listItems, setItem] = useState<Artist[]>(props.items);

  useEffect(() => {
    setItem(props.items)
  }, []);

  return (
    <article>
      <div className="mask">
        <a href="listItem.image" className="mask-img" title="how-to-build-a-wordpress-website-cover">
          <img src="listItem.image" alt=""/>
        </a>
      </div>
      {(() => {
          const items = [];
          for (let i = 0; i < listItems.length; i++) {
              items.push(<li><ListItem item={listItems[i]} /></li>)
          }
          return <ul>{items}</ul>;
      })()}
    </article>
  );
}

export default List;
