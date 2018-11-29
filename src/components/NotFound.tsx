import * as React from 'react';

interface IPropsProductList {
    title: string;
}


export default class NotFound extends React.Component<IPropsProductList> {
    notFoundStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '26px',
    };

    render() {
        return (
            <div className="not-found" style={this.notFoundStyle}>{this.props.title}</div>
        );
    }
}
