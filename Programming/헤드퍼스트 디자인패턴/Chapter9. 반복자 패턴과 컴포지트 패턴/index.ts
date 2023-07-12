import DinnerMenu from './식당/DinnerMenu';
import PancakeHouseMenu from './식당/PancakeHouseMenu';
import Waitress from './식당/Waitress';

// const pancakeHouseMenu = new PancakeHouseMenu();
// const breakfastItems = pancakeHouseMenu.menuItems;

// const dinnerMenu = new DinnerMenu();
// const lunchItems = dinnerMenu.menuItems;

// breakfastItems.map((item) => {
//   console.log(item.name);
//   console.log(item.description);
//   console.log(item.vegetarian);
//   console.log(item.price);
// });

const pancakeHouseMenu = new PancakeHouseMenu();
const dinnerMenu = new DinnerMenu();

const waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
