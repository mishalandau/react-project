import ButtonRound from '@/components/ButtonRound';
import '@modules/products/products.css';
import * as React from 'react';

interface IPropsAddProducts {
    addProducts?: () => void;
    addToCart?: () => void;
    isAddProducts: boolean;
}

export default class HeaderButtons extends React.Component<IPropsAddProducts> {
    protected headerStyle: React.CSSProperties = {
        position: 'fixed',
        width: '100%',
        display: 'flex',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1,
    };

    render() {
        const titleProductsButton = this.props.isAddProducts ? 'Плюсануть товаров' : 'Товаров больше нет :(';
        return (
            <div style={this.headerStyle}>
                <ButtonRound onClick={this.props.addProducts}>{titleProductsButton}</ButtonRound>
                <div style={{flex: 1}} />
                <ButtonRound onClick={this.props.addToCart}>Корзина</ButtonRound>
            </div>
        );
    }
}
