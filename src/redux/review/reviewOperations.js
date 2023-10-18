import { createAsyncThunk } from '@reduxjs/toolkit';
import * as reviewAPI from './review-api';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (_, thunkAPI) => {
    try {
      const reviews = await reviewAPI.getReviews();
      return reviews;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnReview = createAsyncThunk(
  'reviews/getOwnReview',
  async (_, thunkAPI) => {
    try {
      const review = await reviewAPI.getOwnReview();
      console.log('review: ', review);
      return review;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (newReview, thunkAPI) => {
    try {
      const review = await reviewAPI.addReview(newReview);
      return review;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review, thunkAPI) => {
    try {
      const updatedReview = await reviewAPI.updateReview(review);
      return updatedReview;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const updatedReview = await reviewAPI.deleteReview();
      return updatedReview;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


