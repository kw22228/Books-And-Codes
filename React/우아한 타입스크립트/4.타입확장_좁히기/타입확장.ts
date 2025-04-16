/**
 * 타입스크립트에서는 interface, type키워드를 사용하여 타입을 정의하고
 * extends, 교차 타입(&), 유니온 타입(|)을 사용하여 타입을 확장한다.
 */
interface IBaseMenuItem {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
}
interface IBaseCartItem extends IBaseMenuItem {
  quantity: number;
}

type TBaseMenuItem = {
  itemName: string | null;
  itemImageUrl: string | null;
  itemDiscountAmount: number;
  stock: number | null;
};
type TBaseCartItem = {
  quantity: number;
} & TBaseMenuItem;

interface IEditableCartItem extends BaseCartItem {
  isSoldOut: boolean;
  optionGroups: SelectableOptionGroup[];
}

/**
 * 유니온 타입
 * 2개 이상의 타입을 조합하여 사용하는 방법.
 */
type MyUnion = A | B;
export {};
