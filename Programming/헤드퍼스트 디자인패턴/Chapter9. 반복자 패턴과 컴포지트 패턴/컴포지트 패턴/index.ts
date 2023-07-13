import Menu from './Menu';
import MenuItem from './MenuItem';
import Waitress from './Waitress';

const pancakeHouseMenu = new Menu('펜케이크 하우스', '아침 메뉴');
const dinnerMenu = new Menu('식당 메뉴', '점심 메뉴');
const cafeMenu = new Menu('카페 메뉴', '저녁 메뉴');
const dessertMenu = new Menu('디저트 메뉴', '디저트를 즐겨 보자');

const allMenus = new Menu('전체 메뉴', '전체 메뉴');
allMenus.add(pancakeHouseMenu);
allMenus.add(dinnerMenu);
allMenus.add(cafeMenu);

dinnerMenu.add(new MenuItem('파스타', '마리나라 소스 스파게티', true, 3.89));
dinnerMenu.add(dessertMenu);

dessertMenu.add(new MenuItem('애플 파이', '바닐라 아이스크림', true, 1.59));

const waitress = new Waitress(allMenus);
waitress.printMenu();
