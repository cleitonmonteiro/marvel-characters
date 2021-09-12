import React from 'react';
import {Share} from 'react-native';
import {IconButton} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getFavoritesNames} from '../redux/characters/selectors';
import {useSelector} from 'react-redux';

export const ShareIcon = () => {
  const myFavorites = useSelector(getFavoritesNames);

  const onShare = async () => {
    try {
      await Share.share({
        message: `My Marvel Favorites: ${myFavorites} !`,
      });
    } catch (error) {
      // TODO: handle
    }
  };

  return (
    <IconButton
      marginRight={2}
      icon={<Icon testID="icon-share" name="share" size={24} />}
      onPress={onShare}
    />
  );
};

export default ShareIcon;
