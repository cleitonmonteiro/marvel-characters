import {FlatList, View} from 'native-base';
import React from 'react';
import ListItem from './Listitem';
import EmptyList from './EmptyList';
import {RefreshControl} from 'react-native';
import Loading from './Loading';

export const CharactersList = ({
  characters,
  emptyMessage,
  isLoadingMore,
  refreshing,
  onRefresh,
  onEndReached,
}) => {
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
              imageUrl={item?.imageUrl}
              isFavorite={item?.favorite}
            />
          );
        }}
        keyExtractor={item => String(item.id)}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={() => {
          if (!isLoadingMore) {
            return null;
          }
          return <Loading />;
        }}
      />
    </View>
  );
};

export default CharactersList;
