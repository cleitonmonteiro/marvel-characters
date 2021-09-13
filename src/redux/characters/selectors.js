import {createSelector} from 'reselect';
import {MODULE_NAME} from './constants';

export const getRawCharacters = state => state[MODULE_NAME].raw;
export const getCharactersIds = state => state[MODULE_NAME].home;
export const getOffset = state => state[MODULE_NAME].offset;
export const getMaxCharacters = state => state[MODULE_NAME].total;
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

export const getFavorites = createSelector(getRawCharacters, characters => {
  return Object.values(characters).filter(item => item?.favorite);
});

export const getFavoritesNames = createSelector(getFavorites, favorites => {
  return favorites.map(item => item.name).join(', ');
});
