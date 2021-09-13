import React from 'react';
import {debounce} from 'lodash';
import {Box, Column, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CharactersSearch = () => {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    debounce(() => {
      // TODO: apply filters
    }, 1500)();
  };

  return (
    <Column>
      <Box width="100%">
        <Input
          placeholder="Search"
          variant="filled"
          autoFocus
          height="50px"
          bg="gray.200"
          borderRadius={4}
          px={2}
          mx="2"
          my="1"
          InputLeftElement={<Icon size={24} color="gray" name="search" />}
          value={value}
          onChange={handleChange}
        />
      </Box>
    </Column>
  );
};

export default CharactersSearch;
