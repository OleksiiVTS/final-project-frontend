import { createSlice } from '@reduxjs/toolkit';
import {
  getReviews,
  getOwnReview,
  addReview,
  updateReview,
  deleteReview,
} from './reviewOperations';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    ownReview: {},
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(getReviews.pending, handlePending)
      .addCase(getOwnReview.pending, handlePending)
      .addCase(addReview.pending, handlePending)
      .addCase(updateReview.pending, handlePending)
      .addCase(deleteReview.pending, handlePending)
      .addCase(getReviews.rejected, handleRejected)
      .addCase(getOwnReview.rejected, handleRejected)
      .addCase(addReview.rejected, handleRejected)
      .addCase(updateReview.rejected, handleRejected)
      .addCase(deleteReview.rejected, handleRejected)
      .addCase(getReviews.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.ownReview = payload;
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.ownReview = payload;
      })
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        state.ownReview.comment = payload.comment;
        state.ownReview.rating = payload.rating;
      })
      .addCase(deleteReview.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.ownReview = {};
      }),
});

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reviewsReducer = reviewSlice.reducer;
