import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  fetchAllArtists,
  isFetchingSelector,
  artistsSelector,
} from '../../store/livinfo';

export const useArtistListFacade = (arg: { offset?: number; limit?: number }) => {
  const { offset, limit } = arg;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingSelector);
  const artists = useSelector(artistsSelector);

  const fetchAll = useCallback(
    (arg: { offset?: number; limit?: number }) => {
      return dispatch<any>(fetchAllArtists(arg)).then(unwrapResult);
    },
    [dispatch]
  );

  const changeOffset = useCallback(
    (offset: number) => {
      const params = new URLSearchParams(location.search);
      params.set('offset', `${offset}`);
      navigate(`/artists?${params}`);
    },
    [history, location.search]
  );

  const changeLimit = useCallback(
    (limit: number) => {
      const params = new URLSearchParams(location.search);
      params.set('limit', `${limit}`);
      navigate(`/artists?${params}`);
    },
    [history, location.search]
  );

  useEffect(() => {
    fetchAll({ offset, limit });
  }, [offset, limit, fetchAll]);

  return {
    isFetching,
    artists,
    changeOffset,
    changeLimit,
    fetchAll,
  } as const;
};
