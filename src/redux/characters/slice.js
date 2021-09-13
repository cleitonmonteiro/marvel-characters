import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';

import {MODULE_NAME} from './constants';

const initialState = {
  raw: {},
  home: [],
  favorites: [],
  characters: [],
  loading: false,
  hasError: false,
  selectedCharacterId: 0,
};

const charactersSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    toggleFavorite: (state, {payload}) => {
      const index = state.favorites.indexOf(payload);
      if (index === -1) {
        state.favorites.push(payload);
      } else {
        state.favorites.splice(index, 1);
      }
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
