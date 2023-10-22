import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../types/index';
import * as collectionsAPI from '../../collections/services/collectionsApi';
import { builderError } from '../../../common/utils/builderError';
import { PaginationReqParams } from '../../../common/types/common';
import { RootState } from '../../../app/store';

interface collectionsInitialState {
   results: Collection[];
   isLoading: boolean;
   isError: string | boolean | undefined;
   page: number;
}

const initialState: collectionsInitialState = {
   results: [],
   isLoading: false,
   isError: false,
   page: 1,
};

export const fetchCollections = createAsyncThunk<Collection[], PaginationReqParams, { rejectValue: string }>(
   'collections/fetchCollections',
   async (params, { rejectWithValue }) => {
      try {
         const data = await collectionsAPI.fetchList(params);
         return data;
      } catch (e) {
         return rejectWithValue(builderError(e));
      }
   },
);

const collectionsSlice = createSlice({
   name: 'collectionsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCollections.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchCollections.fulfilled, (state, action: PayloadAction<Collection[]>) => {
            state.results = action.payload;
            state.isLoading = false;
         })
         .addCase(fetchCollections.rejected, (state, action) => {
            state.isError = action.payload;
         });
   },
});

export const selectCollections = (state: RootState) => state.collections;

export default collectionsSlice.reducer;