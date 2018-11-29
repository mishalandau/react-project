import cart from '@modules/cart/store';
import products from '@modules/products/store';
import { combineReducers } from 'redux';

const AppStorage = combineReducers({
    products,
    cart,
});
​
export default AppStorage;
