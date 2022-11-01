import { createReducer } from '@reduxjs/toolkit';

import { initialState, adapter } from '../states';
import {
  fetchAllArtists,
  fetchArtist,
} from '../actions';

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchAllArtists.pending, (state) => {
      return { ...state, isFetching: true };
    })
    .addCase(fetchAllArtists.fulfilled, (state, action) => {
      const { artists } = action.payload;
      return adapter.setAll({ ...state, isFetching: false }, artists);
    })
    .addCase(fetchAllArtists.rejected, (state) => {
      return { ...state, isFetching: false };
    })
    .addCase(fetchArtist.pending, (state, action) => {
      const { id } = action.meta.arg;
      return { ...state, isFetching: true, selectedId: id };
    })
    .addCase(fetchArtist.fulfilled, (state, action) => {
      const { artist } = action.payload;
      return adapter.upsertOne({ ...state, isFetching: false }, artist);
    })
    .addCase(fetchArtist.rejected, (state) => {
      return { ...state, isFetching: false };
    })
);
