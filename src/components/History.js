import React, { Component } from 'react';
import HistoryItem from './HistoryItem.js';

class History extends Component {

    buildTableRows() {
        let historyItems = [];
        for (let i = 0; i < this.props.history.length; i += 1) {
            let item = this.props.history[i];
            let itemRow = (<HistoryItem key={i} i={i} item={item} />);
            historyItems.push(itemRow);
        }
        return historyItems;
    }

    render() {
        // Convert the objects to JSX
        return (
            <div>
                <h2>History</h2>
                <table>
                    <tbody>
                        {/* hitoryItems is an array of tr's */}
                        {this.buildTableRows()}
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default History;