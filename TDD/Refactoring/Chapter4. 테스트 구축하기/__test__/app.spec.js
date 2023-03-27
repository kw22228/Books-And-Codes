import { expect } from 'chai';
import assert from 'assert';

import Province from '../Province';
import sampleProvinceData from '../sampleProvinceData';

describe('province', () => {
  let asia;
  //각 테스트가 실행되기전에 실행
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it('shortfail', () => {
    // expect(asia.shortfail).equal(7);
    assert.equal(asia.shortfail, 5);
  });

  it('profit', () => {
    expect(asia.profit).equal(230);
  });

  it('set production', () => {
    asia.producers[0].production = 20;
    expect(asia.shortfail).equal(-6);
    expect(asia.profit).equal(292);
  });

  it('zero demand', () => {
    asia.demand = 0;
    expect(asia.shortfail).equal(-25);
    expect(asia.profit).equal(0);
  });

  it('nagative demand', () => {
    asia.demand = -1;
    expect(asia.shortfail).to.equal(-26);
    expect(asia.profit).to.equal(-10);
  });

  it('empty string demand', () => {
    asia.demand = '';
    expect(asia.shortfail).NaN;
    expect(asia.profit).NaN;
  });
});

describe('no producers', () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: 'No Producers',
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it('shortfail', () => {
    expect(noProducers.shortfail).equal(30);
  });

  it('profit', () => {
    expect(noProducers.profit).equal(0);
  });
});

describe('string for producers', () => {
  it('', () => {
    const data = {
      name: 'String producers',
      producers: '',
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfail).equal(0);
  });
});
