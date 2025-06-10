import {createSlice} from '@reduxjs/toolkit';
import type {MenuItem} from '../../components/context/initialState';
import initialState from '../../components/context/initialState';

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
  },
});

export default menuSlice.reducer;