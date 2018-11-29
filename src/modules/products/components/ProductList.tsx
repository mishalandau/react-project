import '@modules/products/products.css';
import * as React from 'react';
import ProductItem, { IProductsOpts } from './ProductItem';

interface IPropsProductList {
    products: IProductsOpts[];
    toggleCart?: (id: number) => void;
}


export default class ProductList extends React.Component<IPropsProductList> {
    render() {
        return (
        <div className="product-list">
            {this.props.products.map(product =>
                <ProductItem
                    {...product}
                    toggleCart={() => this.props.toggleCart && this.props.toggleCart(product.id)}
                    key={product.id} />
            )}
        </div>
        );
    }
}
