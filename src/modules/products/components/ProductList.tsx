import '@modules/products/products.css';
import * as React from 'react';
import { IProduct } from '../ProductModel';
import Product from './ProductItem';

interface IPropsProductList {
    products: IProduct[];
}


export default class Products extends React.Component<IPropsProductList> {
    render() {
        return (
        <div className="product-list">
            {this.props.products.map(product =>
                <Product
                    {...product}
                    key={product.id} />
            )}
        </div>
        );
    }
}
