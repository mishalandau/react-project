import  products from '@modules/products/store';
import { combineReducers } from 'redux';

const AppStorage = combineReducers({
    products,
});
​
export default AppStorage;
