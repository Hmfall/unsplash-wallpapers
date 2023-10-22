import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import {
   PaginatedPhotoResults,
   Photo,
   PhotosReqParams,
   PhotoValidColorValues,
} from '../types';
import {
   fetchPhotosByQuery,
   fetchPhotosByTopic,
} from './actions';

type imagesState = {
   results: Photo[];
   total: number;
   total_pages: number;
   // page: number;
   isLoading: boolean;
   isError: string | boolean | undefined;
   filters: PhotosReqParams;
}

const initialState: imagesState = {
   results: [],
   total: 0,
   total_pages: 0,
   isLoading: false,
   isError: false,
   filters: {
      page: 1,
      query: undefined,
      order_by: undefined,
      collections: undefined,
      content_filter: undefined,
      color: undefined,
      orientation: undefined,
      slug: undefined,
   },
};

export const photosSlice = createSlice({
   name: 'photos',
   initialState,
   reducers: {
      /*    setPage(state, action: PayloadAction<number>) {
             state.page = action.payload;
          },*/
      setNextPage(state) {
         state.filters.page += 1;
      },
      setOrderBy(state, action) {
         state.filters.order_by = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPhotosByQuery.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchPhotosByQuery.fulfilled, (state, action: PayloadAction<PaginatedPhotoResults>) => {
            state.isLoading = false;
            const {
               results,
               total_pages,
               total,
            } = action.payload;
            state.total = total;
            state.total_pages = total_pages;
            state.results.push(...results);
         })
         .addCase(fetchPhotosByQuery.rejected, (state, action) => {
            state.isError = action.payload;
         })

         .addCase(fetchPhotosByTopic.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchPhotosByTopic.fulfilled, (state, action: PayloadAction<Photo[]>) => {
            state.isLoading = false;
            state.results = action.payload;
         })
         .addCase(fetchPhotosByTopic.rejected, (state, action) => {
            state.isError = action.payload;
         });
   },
});

export const { setNextPage, setOrderBy } = photosSlice.actions;

export const selectPhotos = (state: RootState) => state.photos;
export const selectPhotosFilters = (state: RootState) => state.photos.filters;

export default photosSlice.reducer;