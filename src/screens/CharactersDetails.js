import {
  Divider,
  Heading,
  IconButton,
  Image,
  Row,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFavorites,
  getSelectedCharacter,
} from '../redux/characters/selectors';
import {toggleFavorite} from '../redux/characters/slice';
import {handleEmptyDescription} from '../utils/uiUtils';

export const CharactersDetails = ({route}) => {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const favorites = useSelector(getFavorites);
  const {name, description, id} = selectedCharacter;

  return (
    <View bg="white" height="100%">
      <Image
        source={{
          uri: 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png',
        }}
        alt="image base"
        resizeMode="cover"
        height={200}
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
    </View>
  );
};

export default CharactersDetails;
