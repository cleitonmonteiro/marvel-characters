import client, {makeDefaultParams} from './client';

export const fetchAll = params => {
  return new Promise((resolve, reject) =>
    client
      .get('/characters', {
        params: {...makeDefaultParams(), ...params},
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      }),
  );
};
