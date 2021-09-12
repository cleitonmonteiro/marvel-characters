import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';

import {MODULE_NAME} from './constants';

const initialState = {
  characters: [],
  favorites: {},
  loading: false,
  hasError: false,
  selectedCharacterId: 0,
};

const charactersSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    toggleFavorite: (state, {payload}) => {
      const last = state.favorites[payload];
      state.favorites[payload] = !last;
    },
    selectCharacter: (state, {payload}) => {
      state.selectedCharacterId = payload;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(
        actions.fetchCharacters.pending,
        actions.fetchCharactersRequested,
      )
      .addCase(actions.fetchCharacters.rejected, actions.fetchCharactersFailed)
      .addCase(
        actions.fetchCharacters.fulfilled,
        actions.fetchCharactersSucceeded,
      );
  },
});

export const {reset, toggleFavorite, selectCharacter} = charactersSlice.actions;

export default charactersSlice.reducer;
