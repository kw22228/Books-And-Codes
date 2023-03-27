import { expect, describe, test } from '@jest/globals';

describe('Setup & Teardown test', () => {
  beforeAll(() => console.log('beforeAll'));
  afterAll(() => console.log('afterAll'));
  beforeEach(() => console.log('beforeEach'));
  afterEach(() => console.log('afterEach'));

  test('', () => console.log('1 - test start!!'));
  test('', () => console.log('2 - test start!!'));
});
