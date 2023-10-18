const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  value: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      void (state.value = action.payload);
    },
  },
});

export const selectTheme = state => state.theme.value;

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;