/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import debounce from 'lodash.debounce';
import {Input, Stack, View} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchCharacters} from '../redux/characters/selectors';
import CharactersList from '../components/CharactersList';
import {appyFilter} from '../redux/characters/slice';
import {fetchCharacters} from '../redux/characters/actions';

export const CharactersSearch = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getSearchCharacters);

  const startSearch = newValue => {
    dispatch(appyFilter(newValue));
    if (newValue) {
      dispatch(fetchCharacters({nameStartsWith: newValue}));
    }
  };

  const handleChange = useMemo(() => debounce(startSearch, 1500), []);

  useEffect(() => handleChange(''), []);

  return (
    <View>
      <Stack minH="80%">
        <Input
          isFullWidth
          placeholder="Search"
          variant="filled"
          autoFocus
          height="50px"
          bg="gray.200"
          borderRadius={4}
          px={2}
          mx="2"
          my="1"
          InputLeftElement={<Icon size={24} color="gray" name="search" />}
          onChangeText={handleChange}
        />
        <CharactersList
          characters={characters}
          emptyMessage="Not characters found... Try again!"
        />
      </Stack>
    </View>
  );
};

export default CharactersSearch;
