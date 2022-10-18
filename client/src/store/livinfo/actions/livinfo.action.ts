import { createAsyncThunk } from '@reduxjs/toolkit';

import { artistService } from '../../../services';
import { featureKey } from '../states';

export const fetchAllTodos = createAsyncThunk(
  `${featureKey}/fetchAll`,
  async (arg: { offset?: number;} = {}) => {
    const { offset} = arg;
    const result = await artistService.fetchAll(offset);
    return { todos: result };
  }
);

export const fetchTodo = createAsyncThunk(
  `${featureKey}/fetch`,
  async (arg: { id: string }) => {
    const { id } = arg;
    const result = await artistService.fetch(id);
    return { todo: result };
  }
);


