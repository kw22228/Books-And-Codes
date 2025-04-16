const isEmpty: boolean = true;
const isLoading: boolean = false;

let value: string;
console.log(value);

type Person = {
  name: string;
  job?: string;
};

const MOVIE_TITLE = Symbol('title');
const MUSIC_TITLE = Symbol('title');
console.log(MOVIE_TITLE === MUSIC_TITLE);

let SYMBOL: unique symbol = Symbol();

/**
 * 객체 타입
 * 7가지 원시타입 이외의 타입은 전부다 객체 타입이다.
 */
function isObject(value: object) {
  return Object.prototype.toString.call(value).replace(/\[|/g, '') === 'Object';
}
isObject({});
isObject({ name: 'KG' });
isObject(20);
isObject(null);

const noticePopup: { title: string; description: string } = {
  title: 'IE 지원 종료 안내',
  description: '브라우저 지원 종료',
};

const noticePopupError: { title: string; description: string } = {
  title: 'IE 지원 종료 안내',
  description: '브라우저 지원 종료',
  startAt: '2022031325',
};

/**
 * Array 타입
 */
const getCartList = async (cartId: number[]) => {
  const res = await CartApi.GET_CART_LIST(cartId);

  return res.getData();
};

getCartList([]);
getCartList([1001]);
getCartList([1001, 1002, 1003]);
getCartList([1001, '1002']);

const targetCodes: ['CATEGORY', 'EXHIBITION'] = ['CATEGORY', 'EXHIBITION'];
const targetCodes2: ['CATEGORY', 'EXHIBITION'] = ['CATEGORY', 'EXHIBITION', 'SALE'];

/**
 * type과 interface
 */
type TNoticePopup = {
  title: string;
  description: string;
};
interface INoticePopup {
  title: string;
  description: string;
}

const noticePopup1: TNoticePopup = {};
const noticePopup2: INoticePopup = {};

/**
 * function
 */
type add = (a: number, b: number) => number;
function add(a, b) {
  return a + b;
}
console.log(typeof add);

function add2(a: number, b: number): number {
  return a + b;
}
export {};
