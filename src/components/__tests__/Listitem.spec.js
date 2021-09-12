import React from 'react';
import Listitem from '../Listitem';
import {render} from '../../utils/testUtils';

describe('Listitem test', () => {
  it('simple render', () => {
    render(<Listitem />);
  });

  it('shoudl render props', () => {
    const props = {
      title: 'title 1',
      imageUrl: 'https://sample-example.com.ebbf5434.png',
      imageAlt: 'image x',
      isFavorite: true,
    };

    const {getByText, getByTestId} = render(<Listitem {...props} />);
    expect(getByText(props.title)).toBeDefined();
    expect(getByTestId('icon-favorite')).toBeDefined();

    const image = getByTestId(`image-${props.title}`);
    expect(image).toBeDefined();
    expect(image.props.alt).toBe(props.imageAlt);
  });
});
