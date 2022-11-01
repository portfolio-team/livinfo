import { createReducer } from '@reduxjs/toolkit';

import { initialState, adapter } from '../states';
import {
  fetchAllTodos,
  fetchTodo,
} from '../actions';

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchAllTodos.pending, (state) => {
      return { ...state, isFetching: true };
    })
    .addCase(fetchAllTodos.fulfilled, (state, action) => {
      const { todos } = action.payload;
      return adapter.setAll({ ...state, isFetching: false }, todos);
    })
    .addCase(fetchAllTodos.rejected, (state) => {
      return { ...state, isFetching: false };
    })
    .addCase(fetchTodo.pending, (state, action) => {
      const { id } = action.meta.arg;
      return { ...state, isFetching: true, selectedId: id };
    })
    .addCase(fetchTodo.fulfilled, (state, action) => {
      const { todo } = action.payload;
      return adapter.upsertOne({ ...state, isFetching: false }, todo);
    })
    .addCase(fetchTodo.rejected, (state) => {
      return { ...state, isFetching: false };
    })
);
