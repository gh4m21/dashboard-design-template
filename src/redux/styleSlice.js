import { createSlice } from '@reduxjs/toolkit';
import * as styles from '../components/MenuConfig/styles';
import {
  localStorageDarkModeKey,
  localStorageStyleKey,
} from '../components/MenuConfig/config';

const initialState = {
  asideStyle: styles.white.aside,
  asideScrollbarsStyle: styles.white.asideScrollbars,
  asideBrandStyle: styles.white.asideBrand,
  asideMenuItemStyle: styles.white.asideMenuItem,
  asideMenuItemActiveStyle: styles.white.asideMenuItemActive,
  asideMenuDropdownStyle: styles.white.asideMenuDropdown,
  navBarItemLabelStyle: styles.white.navBarItemLabel,
  navBarItemLabelHoverStyle: styles.white.navBarItemLabelHover,
  navBarItemLabelActiveColorStyle: styles.white.navBarItemLabelActiveColor,
  overlayStyle: styles.white.overlay,
  darkMode: false,
};

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode =
        action.payload !== null ? action.payload : !state.darkMode;

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          localStorageDarkModeKey,
          state.darkMode ? '0' : '1'
        );
      }

      if (typeof document !== 'undefined') {
        document.body.classList[state.darkMode ? 'add' : 'remove'](
          'dark-scrollbars'
        );

        document.documentElement.classList[state.darkMode ? 'add' : 'remove'](
          'dark-scrollbars-compat'
        );
      }
    },

    setStyle: (state, action) => {
      if (!styles[action.payload]) {
        return;
      }

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(localStorageStyleKey, action.payload);
      }

      const style = styles[action.payload];

      for (const key in style) {
        state[`${key}Style`] = style[key];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode, setStyle } = styleSlice.actions;

export default styleSlice.reducer;
