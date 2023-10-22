import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import * as topicsAPI from '../services/topicsApi';
import { builderError } from '../../../common/utils/builderError';
import { Topic } from '../types';
import { ListTopicsReqParams } from '../types/index';

type topicsState = {
   results: Topic[];
   isLoading: boolean;
   isError: string | boolean | undefined;
}

const initialState: topicsState = {
   results: [],
   isLoading: false,
   isError: false,
};

export const fetchTopics = createAsyncThunk<Topic[], ListTopicsReqParams, { rejectValue: string }>(
   'topics/fetchTopics',
   async (params, { rejectWithValue }) => {
      try {
         const data = await topicsAPI.fetchList(params);
         return data;
      } catch (e) {
         return rejectWithValue(builderError(e));
      }
   },
);

const topicsSlice = createSlice({
   name: 'topics',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchTopics.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchTopics.fulfilled, (state, action: PayloadAction<Topic[]>) => {
            state.results = action.payload;
            state.isLoading = false;
         })
         .addCase(fetchTopics.rejected, (state, action) => {
            state.isError = action.payload;
         });
   },
});

export const selectTopics = (state: RootState) => state.topics;

export default topicsSlice.reducer;