import HeaderBar from '@/components/HeaderBar';
import NotFound from '@/components/NotFound';
import * as cartStore from '@modules/cart/store/actions';
import * as React from 'react';
import { connect } from 'react-redux'
import './cart.css';
import CartList from './components/CartList';
import { getFullDataProductsInCart } from './store/selectors';

interface IPropsCart {
  products: any[];
  dispatch: (action: any) => Promise<any>;
}

@(connect((state: any) => {
  return {
      products: getFullDataProductsInCart(state),
  };
}) as any)
export default class Cart extends React.Component<IPropsCart> {
  get products() {
    return this.props.products.map((product) => {
      return { ...product, isSelected: true };
    });
  }

  toggleCart(id: number) {
      this.props.dispatch(cartStore.toggleCart(id));
  }

  render() {
    return (
      <div className="cart">
        <HeaderBar title="Корзинка :)" />
        {this.products.length ?
          <CartList
            toggleCart={(id) => this.toggleCart(id)}
            products={...this.products} />
              : <div className="cart__empty" ><NotFound title="Ваша корзина пуста" /></div>}
      </div>
    );
  }
}
