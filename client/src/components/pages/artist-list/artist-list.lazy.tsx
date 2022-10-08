import { lazy, Suspense } from 'react';

const LazyArtistList = lazy(() => import('./artist-list'));

const ArtistList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyArtistList {...props} />
  </Suspense>
);

export default ArtistList;
