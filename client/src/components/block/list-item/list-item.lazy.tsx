import React, { lazy, Suspense } from 'react';

const LazyListItem = lazy(() => import('./list-item'));

const ListItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyListItem {...props} />
  </Suspense>
);

export default ListItem;
