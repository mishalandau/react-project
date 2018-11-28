import ProductList from '@modules/products/components/ProductList';
import * as React from 'react';
import { connect } from 'react-redux'
import HeaderButtons from './components/HeaderButtons';
import './products.css';

interface IPropProducts {
    products?: any;
    dispatch?: (action: any) => void;
}

@(connect((state: any): IPropProducts => {
    return {
        products: state.products,
    };
}) as any)
export default class Products extends React.Component<IPropProducts> {
    addProducts() {
        // tslint:disable-next-line:no-console
        console.log('add products');
    }

    addToBasket() {
        // tslint:disable-next-line:no-console
        console.log('add to basket');
    }

    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.products);
        const products = [
            {
                id: 1,
                name: 'product 1',
                color: '#54938b',
                textColor: '#ffffff',
            },
            {
                id: 2,
                name: 'product 2',
                color: '#295575',
                textColor: '#ffffff',
            },
            {
                id: 3,
                name: 'product 3',
                color: '#4361ae',
                textColor: '#ffffff',
            },
            {
                id: 4,
                name: 'product 4',
                color: '#3566b0',
                textColor: '#ffffff',
            },
        ];

        return (
        <div className="products">
            <HeaderButtons addProducts={this.addProducts} addToBasket={this.addToBasket} />
            <ProductList products={products} />
        </div>
        );
    }
}
