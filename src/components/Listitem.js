import React from 'react';
import {Image, Box, Heading, Row, IconButton, Column} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

const ListItem = ({
  title,
  isFavorite = false,
  onTap,
  onFavorite,
  imageUrl = 'https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png',
  imageAlt = title,
}) => {
  console.log('Render', title);
  return (
    <TouchableOpacity onPress={onTap} activeOpacity={0.9}>
      <Box bg="white" marginX="2" marginY="1" shadow={2} rounded="lg">
        <Row space={4} justifyContent="space-between">
          <Image
            source={{
              uri: imageUrl,
            }}
            roundedLeft="lg"
            size={'md'}
            alt={imageAlt}
          />
          <Column>
            <Heading size="sm">{title}</Heading>
          </Column>
          <IconButton
            colorScheme="emerald"
            icon={
              <Icon
                name={isFavorite ? 'favorite' : 'favorite-outline'}
                size={30}
              />
            }
            onPress={onFavorite}
          />
        </Row>
      </Box>
    </TouchableOpacity>
  );
};

export default ListItem;
