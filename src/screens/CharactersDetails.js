import {
  Divider,
  Heading,
  IconButton,
  Image,
  Row,
  Stack,
  Text,
  ScrollView,
  Box,
} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getSelectedCharacter} from '../redux/characters/selectors';
import {setFavorite} from '../redux/characters/slice';
import {handleEmptyDescription} from '../utils/uiUtils';

export const CharactersDetails = () => {
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const {name, description, id, imageUrl, favorite} = selectedCharacter;
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
          <Box width="85%">
            <Heading size="md">{name}</Heading>
          </Box>
          <IconButton
            p={0}
            icon={
              <Icon
                name={favorite ? 'favorite' : 'favorite-outline'}
                size={30}
              />
            }
            onPress={() => dispatch(setFavorite({id, value: !favorite}))}
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
