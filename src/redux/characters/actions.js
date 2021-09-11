import {createAsyncThunk} from '@reduxjs/toolkit';
import {FETCH_CHARACTERS} from './constants';
import * as charactersApi from '../../api/charactersApi';

export const fetchCharacters = createAsyncThunk(FETCH_CHARACTERS, async () => {
  const data = await charactersApi.fetchAll();
  return data;
});

export const fetchCharactersRequested = (state, action) => {
  // TODO
};

export const fetchCharactersFailed = (state, action) => {
  // TODO
};

export const fetchCharactersSucceeded = (state, action) => {
  const {
    data: {results},
  } = action.payload;
  state.characters = results;
};
