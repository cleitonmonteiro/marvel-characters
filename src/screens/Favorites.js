import React from 'react';
import {useSelector} from 'react-redux';
import CharactersList from '../components/CharactersList';
import {getFavorites} from '../redux/characters/selectors';

export const Favorites = ({navigation}) => {
  const favorites = useSelector(getFavorites);

  return (
    <CharactersList
      navigation={navigation}
      characters={favorites}
      emptyMessage="Don't have favorites."
    />
  );
};

export default Favorites;
