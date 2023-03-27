// const { expect, describe, test } = require('@jest/globals');
import { expect, describe, test } from '@jest/globals';

describe('Using Matchers', () => {
  /** 일반 매처 */
  //toBe
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  //toEqual
  test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  //not
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
        expect(a + b).not.toBe(1);
      }
    }
  });

  //toBeCloseTo
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // 반올림 오류로 동작하지 않을 것입니다
    expect(value).toBeCloseTo(0.3); // 동작합니다
  });

  /** 참 구분 매처 */
  test('null', () => {
    const n = null;
    expect(n).toBeNull(); // null 일때 참
    expect(n).toBeDefined(); // undefined가 아닐때 참
    expect(n).not.toBeUndefined(); // undefined일때 참
    expect(n).not.toBeTruthy(); // 참일떄 참
    expect(n).toBeFalsy(); // 거짓일때 참
  });
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  /** 숫자 비교 매처 */
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // 3보다 크다.
    expect(value).toBeGreaterThanOrEqual(4); // 4보다 크거나 같다.
    expect(value).toBeLessThan(5); // 5보다 작다
    expect(value).toBeLessThanOrEqual(4); // 4보다 작거나 같다
  });

  /** 문자열 비교 매처 */
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  test('there is a tEAm in team', () => {
    expect('team').toMatch(/tEAm/i);
  });

  /** 배열과 이터러블 */
  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  /** 예외 */
  function compileAndroidCode() {
    throw new Error('You are using the wrong JDK');
  }
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    expect(compileAndroidCode).toThrow('You are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
});
