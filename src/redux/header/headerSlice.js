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
    changeFeedbackModalOpen: (state, action) => {
        void (state.isFeedbackModalOpen = action.payload);
      },
      changeSidebarModalOpen: (state, action) => {
        void (state.isSidebarModalOpen = action.payload);
      },
  },
});

export const selectTheme = state => state.header.theme;
export const selectFeedbackModalOpen = state => state.header.isFeedbackModalOpen;
export const selectSidebarModalOpen = state => state.header.isSidebarModalOpen;

export const { changeTheme, changeFeedbackModalOpen,  changeSidebarModalOpen} = HeaderSlice.actions;
export const headerReducer = HeaderSlice.reducer;