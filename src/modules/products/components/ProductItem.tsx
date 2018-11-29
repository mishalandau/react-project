import '@modules/products/products.css';
import * as React from 'react';
import { IProduct } from '../ProductModel';


export interface IProductsOpts extends IProduct {
    isSelected: boolean;
}

interface IPropsProductItem extends IProductsOpts {
    toggleCart?: (event?: React.MouseEvent) => void;
}

export default class ProductItem extends React.Component<IPropsProductItem> {
    render() {
        return (
            <div className="product-item" style={{backgroundColor: this.props.color}}>
                <span className="product-item__name" style={{color: this.props.textColor}}>{this.props.name}</span>
                <div className="product-item__add-to-cart" onClick={(e: React.MouseEvent) => this.props.toggleCart && this.props.toggleCart(e)}>
                    <span>{!this.props.isSelected ? 'Добавить в корзину' : 'Удалить из карзины'}</span>
                </div>
            </div>
        );
    }
}
