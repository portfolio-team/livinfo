import { createAsyncThunk } from '@reduxjs/toolkit';

import { artistService } from '../../../services';
import { featureKey } from '../states';

export const fetchAllArtists = createAsyncThunk(
  `${featureKey}/fetchAll`,
  async (arg: { offset?: number; limit?: number;} = {}) => {
    const { offset, limit } = arg;
    const result = await artistService.fetchAll(offset, limit);
    return { artists: result };
  }
);

export const fetchArtist = createAsyncThunk(
  `${featureKey}/fetch`,
  async (arg: { id: string }) => {
    const { id } = arg;
    const result = await artistService.fetch(id);
    return { artist: result };
  }
);


