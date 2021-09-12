import React from 'react';
import Loading from '../Loading';
import {render} from '../../utils/testUtils';

describe('Loading test', () => {
  it('simple render', () => {
    render(<Loading />);
  });

  it('shoudl render spinner', () => {
    const {getByTestId} = render(<Loading />);
    expect(getByTestId('Spinner')).toBeDefined();
  });
});
