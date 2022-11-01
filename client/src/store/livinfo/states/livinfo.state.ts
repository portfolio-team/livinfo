import { EntityState, createEntityAdapter } from '@reduxjs/toolkit';

import { Artist } from '../../../models';

export const featureKey = 'todos';

export interface State extends EntityState<Artist> {
  isFetching: boolean;
  selectedId: string | null;
}

export const adapter = createEntityAdapter<Artist>();

export const initialState: State = adapter.getInitialState({
  isFetching: false,
  selectedId: null,
});
