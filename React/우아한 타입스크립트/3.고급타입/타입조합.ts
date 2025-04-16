/**
 * 교차 타입
 * 여러 타입을 결합하여 하나의 단일 타입으로 만듬.
 * &을 사용해서 표기한다.
 */
type ProductItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  quantity: number;
};
type ProductItemWithDiscount = ProductItem & { discountAmount: number };

/**
 * 유니온 타입
 * 타입 A와 타입 B중에 공통되는부분만.
 * A | B로 표기한다.
 */
type CardItem = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
};
type PromotionEventItem = ProductItem | CardItem;

const printPromotionItem = (item: PromotionEventItem) => {
  console.log(item.name);

  console.log(item.price);
};

/**
 * 인덱스 시그니처
 * 특정 타입의 프로퍼티 이름은 알 수 없지만 속성값의 타입을 알때 사용.
 */
interface IndexSignatureEx {
  [key: string]: number;
}
interface IndexSignatureEx2 {
  [key: string]: number | boolean;
  length: number;
  isValid: boolean;
  name: string; // 인덱스 시그니처의 key의 타입이 number | boolean이기 때문에 string 타입의 값은 들어올 수 없다.
}

/**
 * 인덱스드 엑세스 타입
 * 다른 타입의 특정 속성이 가지는 타입을 조회하기 위해 사용
 */
type Example = {
  a: number;
  b: string;
  c: boolean;
};
type IndexedAccess = Example['a'];
type IndexedAccess2 = Example['a' | 'b'];
type IndexedAccess3 = Example[keyof Example];

type ExAlias = 'b' | 'c';
type IndexedAccess4 = Example[ExAlias];

const PromotionList = [
  { type: 'product', name: 'chicken' },
  { type: 'product', name: 'pizza' },
  { type: 'card', name: 'cheer-up' },
];
type ElementOf<T> = T[number];
type PromotionItemType = ElementOf<typeof PromotionList>;

/**
 * 맵드 타입(Mapped Types)
 * 다른 타입을 기반으로 한 새로운 타입을 선언할 때 사용.
 */
type Example2 = {
  a: number;
  b: string;
  c: boolean;
};
type Subset<T> = {
  [K in keyof T]?: T[K];
};
const aExample: Subset<Example2> = { a: 3 };
const bExample: Subset<Example2> = { b: 'hello' };
const acExample: Subset<Example2> = { a: 4, c: true };

type ReadOnlyEx = {
  readonly a: number;
  readonly b: string;
};
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
type ResultType = CreateMutable<ReadOnlyEx>;

type OptionalEx = {
  a?: number;
  b?: string;
  c: boolean;
};
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type ResultType2 = Concrete<OptionalEx>;

////////
const BottomSheetMap = {
  RECENT_CONTACTS: RecentContactsBottomSheet,
  CARD_SELECT: CardSelectBottomSheet,
  SORT_FILTER: SortFilterBootomSheet,
  PRODUCT_SELECT: ProductSelectBottomSheet,
  REPLY_CARD_SELECT: ReplyCardSelectBottomSheet,
  RESEND: ResendBottomSheet,
  STICKER: StickerBottomSheet,
  BASE: null,
};
type BOTTOM_SHEET_ID = keyof typeof BottomSheetMap;
type BottomSheetStore = {
  [index in BOTTOM_SHEET_ID as `${index}_BOTTOM_SHEET`]: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
};

/**
 * 템블릿 리터럴 타입
 * 자바스크립트 템플릿 리터럴을 사용하여 리터럴 타입을 선언.
 */
type Stage = 'init' | 'select-image' | 'edit-image' | 'decorate-card' | 'capture-image';
type StageName = `${Stage}-stage`;

/**
 * 제네릭
 * 내부적으로 사용할 타입을 미리 정해두지 않고
 * 타입 변수를 사용해서 다이나믹하게 타입을 지정한다.
 */
type ExampleArrayType<T> = T[];
const arrayGeneric0: ExampleArrayType<string> = ['치킨', '피자', '우동'];

function exampleGenericFunc<T>(arg: T): T[] {
  return new Array(3).fill(arg);
}
exampleGenericFunc('hello');

function exampleFunc2<T>(arg: T): number {
  return arg.length; // arg가 들어오는 T 제네릭은 어떤 타입이든 들어올 수 있는 경우를 생각해야한다.
}
interface TypeWithLength {
  length: number;
}
function exampleFunc3<T extends TypeWithLength>(arg: T): number {
  return arg.length; // extends를 통해서 T제네릭은 length속성을 가진 타입만 받게끔 좁힌다.
}

//JSX에서의 제네릭
const arrowExampleFunc = <T>(arg: T): T[] => {
  //JSX는 <T>와 <html>의 꺽쇠괄호(<>)를 혼동하여 문제가 발생할 수 있다.
  return new Array(3).fill(arg);
};
const arrowExampleFunc2 = <T extends {}>(arg: T): T[] => {
  return new Array(3).fill(arg);
};
export {};
