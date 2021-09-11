import reducer from './slice';

describe('characters tests', () => {
  it('should handle initial state', () => {
    const actual = reducer(undefined, {type: 'unknown'});
    expect(actual.count).toEqual(0);
  });
});
