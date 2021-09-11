import {MODULE_NAME} from './constants';

export const getCharacters = state => state[MODULE_NAME].characters;
export const getFavorites = state => state[MODULE_NAME].favorites;
