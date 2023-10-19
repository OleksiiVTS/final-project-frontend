const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  theme: 'light',
  isFeedbackModalOpen: false,
  isSidebarModalOpen: false,
};

const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      void (state.theme = action.payload);
    },
  },
});

export const selectTheme = state => state.header.theme;

export const { changeTheme } = HeaderSlice.actions;
export const headerReducer = HeaderSlice.reducer;