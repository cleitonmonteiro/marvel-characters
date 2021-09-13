import client, {makeDefaultParams} from './client';
import characters from './mocks/characters';

export const fetchAll = offset => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log('offset', offset);
      resolve(characters);
    }, 1000),
  );
  return new Promise((resolve, reject) =>
    client
      .get('/characters', {
        params: {...makeDefaultParams(), offset},
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      }),
  );
};
