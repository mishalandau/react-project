import '@modules/products/products.css';
import * as React from 'react';

interface IPropsButton {
    color?: string;
    textColor?: string;
    onClick: (event?: React.MouseEvent) => void;
}

export default class ButtonRound extends React.Component<IPropsButton> {
    static defaultProps = {
        color: '#ffffff',
        textColor: '#000000',
        onClick: () => null,
    };

    private buttonStyle: React.CSSProperties = {
        padding: '0 65px',
        height: '50px',
        borderRadius: '25px',
        border: 'none',
        boxShadow: '2px 4px 12px rgba(0, 0, 0, .12)',
        fontSize: '18px',
        cursor: 'pointer',
        outline: 'none',
    };

    render() {
        return (
            <button style={{
                ...this.buttonStyle,
                backgroundColor: this.props.color,
                color: this.props.textColor
            }} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}
