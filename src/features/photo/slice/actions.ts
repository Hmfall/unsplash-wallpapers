import { createAsyncThunk } from '@reduxjs/toolkit';

import { Photo, PaginatedPhotoResults, PhotosReqParams } from '../types';
import * as imagesAPI from '../services/photosApi';
import { builderError } from '../../../common/utils/builderError';

export const fetchPhotosByQuery = createAsyncThunk<PaginatedPhotoResults, PhotosReqParams, {
   rejectValue: string
}>(
   'photos/fetchPhotosByQuery',
   async (params, { rejectWithValue }) => {
      try {
         const data = imagesAPI.fetchBySearch(params);
         return data;
      } catch (e) {
         return rejectWithValue(builderError(e));
      }
   },
);

export const fetchPhotosByTopic = createAsyncThunk<Photo[], PhotosReqParams, {
   rejectValue: string
}>(
   'photos/fetchPhotosByTopic',
   async (params, { rejectWithValue }) => {
      try {
         const data = imagesAPI.fetchByTopic(params);
         return data;
      } catch (e) {
         return rejectWithValue(builderError(e));
      }
   },
);

export const fetchPhotosEditorialFeed = createAsyncThunk<Photo[], PhotosReqParams, {
   rejectValue: string
}>(
   'photos/fetchPhotosEditorialFeed',
   async ({ page, order_by }, { rejectWithValue }) => {
      try {
         const data = imagesAPI.fetchEditorialFeed({ page, order_by });
         return data;
      } catch (e) {
         rejectWithValue(builderError(e));
      }
   },
);

export const fetchPhotosByCollections = createAsyncThunk<Photo[], PhotosReqParams, {
   rejectValue: string
}>(
   'photos/fetchPhotosByCollections',
   async (params, { rejectWithValue }) => {
      try {
         const data = imagesAPI.fetchByCollections(params);
         return data;
      } catch (e) {
         rejectWithValue(builderError(e));
      }
   },
);


