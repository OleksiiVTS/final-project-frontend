export const selectUser = state => state.auth.dataUser;
export const selectToken = state => state.auth.token;
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
