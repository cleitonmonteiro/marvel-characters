import {FlatList, View} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../navigation/constants';
import {getFavoritesIds} from '../redux/characters/selectors';
import {selectCharacter, toggleFavorite} from '../redux/characters/slice';
import ListItem from './Listitem';
import EmptyList from './EmptyList';

export const CharactersList = ({navigation, characters, emptyMessage}) => {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(getFavoritesIds);

  const handleDetailClick = id => {
    dispatch(selectCharacter(id));
    navigation.navigate(SCREENS.CHARACTERS_DETAILS);
  };

  if (!characters?.length) {
    return <EmptyList message={emptyMessage} />;
  }

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({item}) => {
          return (
            <ListItem
              title={item.name}
              onTap={() => handleDetailClick(item.id)}
              isFavorite={favoritesIds[item.id]}
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
