import React from 'react';
import {Spinner, Center} from 'native-base';

export const Loading = () => {
  return (
    <Center flex={1}>
      <Spinner testID="Spinner" size="lg" />
    </Center>
  );
};

export default Loading;
