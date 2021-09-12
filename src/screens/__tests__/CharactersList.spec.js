import 'react-native';
import React from 'react';
import {render} from '../../utils/testUtils';

import CharactersList from '../CharactersList';

it('shoudl render text view', () => {
  render(<CharactersList />);
});
