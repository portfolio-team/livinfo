/* eslint-disable */
import List from './list';
import { Artist } from '../../../models';

export default {
  title: "List",
};

const artists: Artist[] = [{
  name: 'default',
  id: 1,
  profile: 'default',
  members: ['default'],
  nationality: 'default',
  image: 'default',
}]

export const Default = () => <List items={artists} />;

Default.story = {
  name: 'default',
};
