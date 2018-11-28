import ButtonRound from '@/components/ButtonRound';
import '@modules/products/products.css';
import * as React from 'react';

interface IPropsAddProducts {
    addProducts?: () => void;
    addToBasket?: () => void;
}

export default class HeaderButtons extends React.Component<IPropsAddProducts> {
    protected headerStyle: React.CSSProperties = {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1,
    };

    render() {
        return (
            <div style={this.headerStyle}>
                <ButtonRound onClick={this.props.addProducts}>Плюсануть товаров</ButtonRound>
                <div style={{flex: 1}} />
                <ButtonRound onClick={this.props.addToBasket}>Корзина</ButtonRound>
            </div>
        );
    }
}
