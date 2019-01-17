import React, { Component } from 'react';

class HistoryItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.i}</td>
                <td>{this.props.item.value}</td>
            </tr>
        );
    }
}

export default HistoryItem;