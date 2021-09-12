import 'react-native';
import React from 'react';
import {render} from '../../utils/testUtils';

import CharactersScreen from '../CharactersScreen';

it('shoudl render text view', () => {
  render(<CharactersScreen />);
});
