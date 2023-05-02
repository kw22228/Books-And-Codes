import { expect, describe, test } from '@jest/globals';
import fetchData from '../lib/fetchData';

describe('Fetch test', () => {
  /** Callback */
  test('callback', done => {
    function callback(data) {
      try {
        expect(data.people[0].Name).toBe('Tiger Nixon');
        done();
      } catch (e) {
        done(e);
      }
    }

    fetchData(callback);
  });
  /** Promise */
  test('promise', () => {
    return fetchData().then(data => {
      const { people } = data;
      expect(people[0].Name).toBe('Tiger Nixon');
    });
  });

  /** Async/Await */
  test('async/await', async () => {
    const { people } = await fetchData();
    expect(people[0].Name).toBe('Tiger Nixon');
  });

  //   test('async/await + resolve', async () => {
  //     await expect(fetchData()).resolves.toBe('Tiger Nixon');
  //   });
  //   test('async/await + reject', async () => {
  //     await expect(fetchData()).rejects.toThrow('error');
  //   });
});
