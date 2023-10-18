import { $instance } from 'redux/auth/authOperations';

export const getReviews = async () => {
  const response = await $instance.get('/reviews');
  return response.data;
};

export const getOwnReview = async () => {
  const response = await $instance.get('/reviews/own');
  return response.data;
};

export const addReview = async newReview => {
  const response = await $instance.post('/reviews/own', newReview);
  return response.data;
};

export const updateReview = async review => {
  const response = await $instance.patch('/reviews/own', review);
  return response.data;
};

export const deleteReview = async () => {
  const response = await $instance.delete('/reviews/own');
  return response.data;
};
