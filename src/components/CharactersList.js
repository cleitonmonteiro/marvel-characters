import {FlatList, View} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
import {getFavoritesIds} from '../redux/characters/selectors';
import ListItem from './Listitem';
import EmptyList from './EmptyList';

export const CharactersList = ({characters, emptyMessage}) => {
  const favoritesIds = useSelector(getFavoritesIds);

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
              id={item.id}
              title={item.name}
              imageUrl={item.imageUrl}
              isFavorite={favoritesIds.includes(item.id)}
            />
          );
        }}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default CharactersList;
