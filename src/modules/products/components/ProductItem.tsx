import '@modules/products/products.css';
import * as React from 'react';
import { IProduct } from '../ProductModel';


export default class ProductItem extends React.Component<IProduct> {
    render() {
        return (
            <div className="product-item" style={{backgroundColor: this.props.color}}>
                <span className="product-item__name" style={{color: this.props.textColor}}>{this.props.name}</span>
                <div className="product-item__add-to-basket">
                    <span>Добавить в корзину</span>
                </div>
            </div>
        );
    }
}
