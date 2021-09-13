import {createAsyncThunk} from '@reduxjs/toolkit';
import {FETCH_CHARACTERS} from './constants';
import * as charactersApi from '../../api/charactersApi';

export const fetchCharacters = createAsyncThunk(FETCH_CHARACTERS, async () => {
  const data = await charactersApi.fetchAll();
  return data;
});

export const fetchCharactersRequested = (state, action) => {
  state.loading = true;
};

export const fetchCharactersFailed = (state, action) => {
  state.loading = false;
  state.hasError = true;
};

export const fetchCharactersSucceeded = (state, action) => {
  const {
    data: {results},
  } = action.payload;

  results?.forEach(character => {
    const {id, name, description, thumbnail} = character;
    const {path, extension} = thumbnail;

    if (!state.home.includes(id)) {
      state.home.push(id);
    }
    state.raw[id] = {
      id,
      name,
      description,
      imageUrl: `${path}.${extension}`,
    };
  });

  state.characters = results;
  state.loading = false;
  state.hasError = false;
};
