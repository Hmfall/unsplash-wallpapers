import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { router } from './app/routes';
import store from './app/store';
import { theme } from './common/theme';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);

root.render(
   <Provider store={store}>
      <ThemeProvider theme={theme}>
         <CssBaseline/>
         <RouterProvider router={router}/>
      </ThemeProvider>
   </Provider>
);