/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useCallback} from 'react';
import {Image, Box, Heading, Row, IconButton, Center} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {selectCharacter, setFavorite} from '../redux/characters/slice';
import {useNavigation} from '@react-navigation/core';
import {SCREENS} from '../navigation/constants';

const ListItem = ({
  id,
  title,
  isFavorite = false,
  imageUrl,
  imageAlt = title,
}) => {
  const iconName = isFavorite ? 'favorite' : 'favorite-outline';
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDetailClick = useCallback(() => {
    dispatch(selectCharacter(id));
    navigation.navigate(SCREENS.CHARACTERS_DETAILS);
  }, [id]);

  const handleFavorite = useCallback(
    () => dispatch(setFavorite({id, value: !isFavorite})),
    [isFavorite],
  );
  return (
    <TouchableOpacity onPress={handleDetailClick} activeOpacity={0.9}>
      <Box bg="white" marginX="2" marginY="1" shadow={2} rounded="lg">
        <Row space={1} justifyContent="space-between" alignItems="center">
          <Image
            testID={`image-${title}`}
            source={{
              uri: imageUrl,
            }}
            roundedLeft="lg"
            size={'md'}
            alt={imageAlt}
          />
          <Center width="60%">
            <Heading size="sm" isTruncated>
              {title}
            </Heading>
          </Center>

          <IconButton
            p={0}
            marginRight={2}
            icon={
              <Icon testID={`icon-${iconName}`} name={iconName} size={30} />
            }
            onPress={handleFavorite}
          />
        </Row>
      </Box>
    </TouchableOpacity>
  );
};

export default memo(ListItem);
