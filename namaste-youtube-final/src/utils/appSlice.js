import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isMobileMenu: false,
    selectedCategory: "New",
    isLoading: false,
    isDark: false,
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
    setTheme: (state) => {
      state.isDark = !state.isDark;
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
  setTheme,
} = appSlice.actions;
export default appSlice.reducer;
