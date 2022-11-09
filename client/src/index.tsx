import React from 'react'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css'
import { RouterConfig } from "pages/route";

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  </React.StrictMode>
)