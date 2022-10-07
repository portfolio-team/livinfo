import React, { lazy, Suspense } from 'react';

const LazyList = lazy(() => import('./List'));

const List = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyList {...props} />
  </Suspense>
);

export default List;
