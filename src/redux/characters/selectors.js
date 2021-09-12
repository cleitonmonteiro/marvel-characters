import {createSelector} from 'reselect';
import {MODULE_NAME} from './constants';

export const getCharacters = state => state[MODULE_NAME].characters;
export const getLoading = state => state[MODULE_NAME].loading;
export const getHasError = state => state[MODULE_NAME].hasError;
export const getFavoritesIds = state => state[MODULE_NAME].favorites;
export const getSelectedCharacterId = state =>
  state[MODULE_NAME].selectedCharacterId;

export const getSelectedCharacter = createSelector(
  getCharacters,
  getSelectedCharacterId,
  (characters, selectedCharacterId) => {
    return characters?.find(item => item.id === selectedCharacterId);
  },
);

export const getFavorites = createSelector(
  getCharacters,
  getFavoritesIds,
  (characters, favoritesIds) => {
    const ids = Object.keys(favoritesIds);
    return characters?.filter(
      item => favoritesIds[item.id] && ids.includes(String(item.id)),
    );
  },
);
