import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isMobileMenu: false,
    selectedCategory: "New",
    isLoading: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    mobileMenu: (state) => {
      state.isMobileMenu = !state.isMobileMenu;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    mobileMenuT: (state) => {
      state.isMobileMenu = !state.isMobileMenu;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  mobileMenu,
  selectCategory,
  setIsLoading,
  mobileMenuT,
} = appSlice.actions;
export default appSlice.reducer;
