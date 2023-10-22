// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Category, Filters } from '../../../@types';
// import { RootState } from '../../../app/store';
// import { SortTypes } from '../../../@types/common';
// import { TSort } from '../../../@types';
//
// const initialState: Filters = {
//    // @ts-ignore
//    category: {
//       title: null,
//       // @ts-ignore
//       property: null,
//    },
//    sort: {
//       title: SortTypes.DATE_TITLE,
//       property: SortTypes.DATE_PROPERTY,
//    },
//    order_by: {
//
//    }
// };
//
// export const filtersSlice = createSlice({
//    name: 'filters',
//    initialState,
//    reducers: {
//       setSort(state, action: PayloadAction<TSort>) {
//          state.sort = action.payload;
//       },
//       setCategory(state, action: PayloadAction<Category>) {
//          state.category = action.payload;
//       },
//    },
// });
//
// export const selectFilter = (state: RootState) => state.filters;
//
// export const { setSort, setCategory } = filtersSlice.actions;
//
// export default filtersSlice.reducer;

export {}