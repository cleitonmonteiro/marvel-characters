import {createSlice} from '@reduxjs/toolkit';
import * as actions from './actions';

import {MODULE_NAME} from './constants';

const initialState = {
  raw: {},
  home: [],
  search: '',
  offset: 0,
  total: 0,
  favorites: {},
  loading: false,
  hasError: false,
  selectedCharacterId: 0,
};

const charactersSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const {id, value} = action.payload;
      state.favorites[id] = value;
      state.raw[id].favorite = value;
    },
    selectCharacter: (state, {payload}) => {
      state.selectedCharacterId = payload;
    },
    appyFilter: (state, {payload}) => {
      state.search = payload;
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

export const {reset, setFavorite, selectCharacter, appyFilter} =
  charactersSlice.actions;

export default charactersSlice.reducer;
