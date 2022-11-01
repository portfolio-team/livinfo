/* eslint-disable */
import ListItem from "./list-item"
import { Artist } from '../../../models';

export default {
  title: "ListItem",
};

const artist: Artist = {
  name: 'default',
  id: 1,
  profile: 'default',
  members: ['default'],
  nationality: 'default',
  image: 'default',
}

export const Default = () => <ListItem item={artist} />;

Default.story = {
  name: 'default',
};
