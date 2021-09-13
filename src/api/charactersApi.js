import client, {makeDefaultParams} from './client';
import characters from './mocks/characters';

export const fetchAll = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(characters), 1000),
  );
  return new Promise((resolve, reject) =>
    client
      .get('/characters', {
        params: makeDefaultParams(),
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      }),
  );
};
