import {createSelector} from 'reselect';
import {MODULE_NAME} from './constants';

export const getRawCharacters = state => state[MODULE_NAME].raw;
export const getCharactersIds = state => state[MODULE_NAME].home;
export const getCharacters = state => state[MODULE_NAME].characters;
export const getLoading = state => state[MODULE_NAME].loading;
export const getHasError = state => state[MODULE_NAME].hasError;
export const getFavoritesIds = state => state[MODULE_NAME].favorites;
export const getSelectedCharacterId = state =>
  state[MODULE_NAME].selectedCharacterId;

export const getHomeCharacters = createSelector(
  getRawCharacters,
  getCharactersIds,
  (characters, charactersIds) => {
    return charactersIds.map(id => characters[id]);
  },
);

export const getSelectedCharacter = createSelector(
  getRawCharacters,
  getSelectedCharacterId,
  (characters, selectedCharacterId) => {
    return characters[selectedCharacterId];
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

export const getFavoritesNames = createSelector(getFavorites, favorites => {
  return favorites.map(item => item.name).join(', ');
});
