import React from 'react';
import {useSelector} from 'react-redux';
import CharactersList from '../components/CharactersList';
import {getFavorites} from '../redux/characters/selectors';

export const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <CharactersList
      characters={favorites}
      emptyMessage="Don't have favorites."
    />
  );
};

export default Favorites;
