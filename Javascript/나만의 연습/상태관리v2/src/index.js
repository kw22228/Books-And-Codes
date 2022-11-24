import store1 from './store/index';
import store2 from './app';

console.log(store1.getInstance() === store2.getInstance());
