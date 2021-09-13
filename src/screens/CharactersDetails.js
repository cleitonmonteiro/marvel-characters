import {
  Divider,
  Heading,
  IconButton,
  Image,
  Row,
  Stack,
  Text,
  ScrollView,
} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFavoritesIds,
  getSelectedCharacter,
} from '../redux/characters/selectors';
import {toggleFavorite} from '../redux/characters/slice';
import {handleEmptyDescription} from '../utils/uiUtils';

export const CharactersDetails = ({route}) => {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const favorites = useSelector(getFavoritesIds);
  const {name, description, id, imageUrl} = selectedCharacter;
  const {width} = useWindowDimensions();

  return (
    <ScrollView bg="white">
      <Image
        source={{
          uri: imageUrl,
        }}
        alt="image base"
        resizeMode="cover"
        height={width}
        roundedTop="md"
      />
      <Stack space={4} p={[4, 4, 8]}>
        <Row justifyContent="space-between">
          <Heading size={['md', 'lg', 'md']} noOfLines={2}>
            {name}
          </Heading>
          <IconButton
            p={0}
            icon={
              <Icon
                name={favorites[id] ? 'favorite' : 'favorite-outline'}
                size={30}
              />
            }
            onPress={() => dispatch(toggleFavorite(id))}
          />
        </Row>
        <Divider />
        <Text lineHeight={[5, 5, 7]}>
          {handleEmptyDescription(description)}
        </Text>
      </Stack>
    </ScrollView>
  );
};

export default CharactersDetails;
