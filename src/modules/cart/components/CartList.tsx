import ProductItem, { IProductsOpts } from '@modules/products/components/ProductItem';
import '@modules/products/products.css';
import * as React from 'react';

interface IPropsProductList {
    products: IProductsOpts[];
    toggleCart?: (id: number) => void;
}


export default class CartList extends React.Component<IPropsProductList> {
    render() {
        return (
        <div className="cart-list">
            {this.props.products.map(product =>
                <div
                    className="cart-list__item"
                    key={product.id}>
                        <ProductItem
                            {...product}
                            toggleCart={() => this.props.toggleCart && this.props.toggleCart(product.id)}
                            />
                </div>
            )}
        </div>
        );
    }
}
