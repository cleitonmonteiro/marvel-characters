/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  getLoading,
  getHasError,
  getHomeCharacters,
  getOffset,
  getMaxCharacters,
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
  const offset = useSelector(getOffset);
  const total = useSelector(getMaxCharacters);
  const isLoadingMore = isLoading && !!offset;
  const charactersSize = characters.length;

  const handleLoadMore = useCallback(() => {
    if (charactersSize < total) {
      dispatch(fetchCharacters(offset));
    }
  }, [offset, charactersSize, total]);

  const handleInitialLoad = useCallback(() => {
    dispatch(fetchCharacters(0));
  }, [offset]);

  useEffect(handleInitialLoad, []);

  if (isLoading && !isLoadingMore) {
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
      onRefresh={handleInitialLoad}
      refreshing={isLoading && !isLoadingMore}
      onEndReached={handleLoadMore}
      isLoadingMore={isLoadingMore}
    />
  );
};

export default CharactersScreen;
