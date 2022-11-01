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
      <ul className="list-component">
        {listItems.map((item: Artist) => {
          return (
            <li><ListItem item={item} /></li>
          );
        })}
      </ul>
    </article>
  );
}

export default List;
