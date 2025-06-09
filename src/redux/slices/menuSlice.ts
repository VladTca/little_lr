import { createSlice } from '@reduxjs/toolkit';
import initialState from '../../components/context/initialState';
import type { MenuItem } from '../../components/context/initialState';

interface MenuState {
  menuData: MenuItem[];
}

const initialMenuState: MenuState = {
  menuData: initialState.menuData,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenuState,
  reducers: {
    // We don't need any reducers for menu data as it's static
  },
});

export default menuSlice.reducer;