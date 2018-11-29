import * as React from 'react';

interface IPropsHeaderBar {
    title: string;
}

export default class HeaderBar extends React.Component<IPropsHeaderBar> {
    protected styleHeaderBar: React.CSSProperties = {
        width: '100%',
        height: '90px',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    };

    protected styleHeaderBarTitle: React.CSSProperties = {
        fontSize: '24px',
    };

    render() {
        return (
            <div className="header-bar" style={this.styleHeaderBar}>
                <span style={this.styleHeaderBarTitle}>{this.props.title}</span>
            </div>
        );
    }
}
