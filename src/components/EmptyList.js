import React from 'react';
import {Center, Text} from 'native-base';

export const EmptyList = ({message}) => {
  return (
    <Center flex={1}>
      <Text>{message}</Text>
    </Center>
  );
};

export default EmptyList;
