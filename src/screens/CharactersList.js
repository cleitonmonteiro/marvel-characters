import React, {useEffect} from 'react';
import {FlatList} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';

import {getCharacters, getFavorites} from '../redux/characters/selectors';
import {fetchCharacters} from '../redux/characters/actions';
import ListItem from '../components/Listitem';
import {SCREENS} from '../navigation/constants';
import {selectCharacter, toggleFavorite} from '../redux/characters/slice';

export const CharactersList = ({navigation}) => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharacters);
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDetailClick = id => {
    dispatch(selectCharacter(id));
    navigation.navigate(SCREENS.CharactersDetails);
  };

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({item}) => {
          return (
            <ListItem
              title={item.name}
              onTap={() => handleDetailClick(item.id)}
              isFavorite={favorites[item.id]}
              onFavorite={() => dispatch(toggleFavorite(item.id))}
            />
          );
        }}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default CharactersList;