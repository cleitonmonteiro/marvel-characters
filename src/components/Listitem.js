import React from 'react';
import {Image, Box, Heading, Row, IconButton} from 'native-base';
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
  const iconName = isFavorite ? 'favorite' : 'favorite-outline';

  return (
    <TouchableOpacity onPress={onTap} activeOpacity={0.9}>
      <Box bg="white" marginX="2" marginY="1" shadow={2} rounded="lg">
        <Row space={4} justifyContent="space-between" alignItems="center">
          <Image
            testID={`image-${title}`}
            source={{
              uri: imageUrl,
            }}
            roundedLeft="lg"
            size={'md'}
            alt={imageAlt}
          />
          <Heading size="sm">{title}</Heading>
          <IconButton
            p={0}
            marginRight={2}
            icon={
              <Icon testID={`icon-${iconName}`} name={iconName} size={30} />
            }
            onPress={onFavorite}
          />
        </Row>
      </Box>
    </TouchableOpacity>
  );
};

export default ListItem;
