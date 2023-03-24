import { describe, expect, test } from '@jest/globals';

import Province from '../Province';
import sampleProvinceData from '../sampleProvinceData';

describe('province', () => {
  test('shortfail', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfail).toBe(5);
  });
});
