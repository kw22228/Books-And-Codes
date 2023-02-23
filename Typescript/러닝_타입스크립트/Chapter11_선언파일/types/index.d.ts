/** 모듈 파일이다. (전역x) */

export interface Character {
  catchphrase?: string;
  name: string;
}

declare let declared: string;

declare let initializer: string = 'wanda';

declare function canGrantWish(wish: string): boolean;

declare function grantWish(wish: string) {
  return true;
};

declare class Fairy {
  canGrantWish(wish: string): boolean;

  grantWish(wish: string) {
    return true;
  }
}

interface Writer {}
declare interface Writer2 {}

declare const fullName: string;
declare const firstName: 'Liz';

const lastName = 'Lemon';

/** 전역 컨텍스트 */
declare global {
  const kjw: string;
}

export declare const greet: (text: string) => void;
