import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  getLoading,
  getHasError,
  getHomeCharacters,
} from '../redux/characters/selectors';
import {fetchCharacters} from '../redux/characters/actions';
import CharactersList from '../components/CharactersList';
import Loading from '../components/Loading';
import EmptyList from '../components/EmptyList';

export const CharactersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const characters = useSelector(getHomeCharacters);
  const isLoading = useSelector(getLoading);
  const hasError = useSelector(getHasError);

  useEffect(() => {
    dispatch(fetchCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <EmptyList message="Cannot fetch characters." />;
  }

  return (
    <CharactersList
      navigation={navigation}
      characters={characters}
      emptyMessage="Not characters found."
    />
  );
};

export default CharactersScreen;
