import {createAsyncThunk} from '@reduxjs/toolkit';
import {FETCH_CHARACTERS} from './constants';
import * as charactersApi from '../../api/charactersApi';

export const fetchCharacters = createAsyncThunk(
  FETCH_CHARACTERS,
  async params => {
    const data = await charactersApi.fetchAll(params);
    return {data, params};
  },
);

export const fetchCharactersRequested = (state, action) => {
  state.loading = true;
};

export const fetchCharactersFailed = (state, action) => {
  state.loading = false;
  state.hasError = true;
};

export const fetchCharactersSucceeded = (state, action) => {
  const {
    data: {results, offset, total},
  } = action.payload.data;

  const {nameStartsWith} = action.payload.params;

  // keeping only favorites on override
  if (offset === 0 && !nameStartsWith) {
    const favorites = {};
    state.favorites = {};
    state.home = [];
    Object.values(state.raw)
      .filter(item => item.favorite)
      .forEach(character => {
        const id = character.id;
        state.home.push(id);
        state.favorites[character.id] = true;
        favorites[character.id] = character;
      });
    state.raw = favorites;
  }

  results?.forEach(character => {
    const {id, name, description, thumbnail} = character;
    const {path, extension} = thumbnail;

    if (!state.home.includes(id)) {
      state.home.push(id);
    }
    const favorite = !!state.raw[id]?.favorite;
    state.raw[id] = {
      id,
      name,
      description,
      favorite,
      imageUrl: `${path}.${extension}`,
    };
  });
  state.total = total;
  state.loading = false;
  state.hasError = false;
  state.offset = offset + 20;
};
