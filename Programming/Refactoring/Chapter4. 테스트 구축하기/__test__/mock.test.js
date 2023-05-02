import { expect, describe, test } from '@jest/globals';
import { forEach } from '../lib/forEach';

const mockCallback = jest.fn(x => 42 + x);
describe('Setup & Teardown test', () => {
  test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    console.log(mockCallback.mock.results);
    expect(mockCallback.mock.calls).toHaveLength(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
