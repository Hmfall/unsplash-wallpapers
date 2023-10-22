import { configureStore } from '@reduxjs/toolkit';

import topicsReducer from '../features/topics/slice/topicsSlice';
import photosReducer from '../features/photo/slice/photosSlice';
import collectionsReducer from '../features/collections/slice/collectionsSlice';
// import filtersReducer from '../features/filters/slice/filtersSlice';

const store = configureStore({
   reducer: {
      topics: topicsReducer,
      photos: photosReducer,
      // filters: filtersReducer,
      collections: collectionsReducer,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;