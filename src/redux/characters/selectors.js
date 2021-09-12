import {createSelector} from 'reselect';
import {MODULE_NAME} from './constants';

export const getCharacters = state => state[MODULE_NAME].characters;
export const getFavorites = state => state[MODULE_NAME].favorites;
export const getSelectedCharacterId = state =>
  state[MODULE_NAME].selectedCharacterId;

export const getSelectedCharacter = createSelector(
  getCharacters,
  getSelectedCharacterId,
  (characters, selectedCharacterId) => {
    return characters?.find(item => item.id === selectedCharacterId);
  },
);
