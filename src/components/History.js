import React, { Component } from 'react';

class History extends Component {

    render() {
        // Convert the objects to JSX
        let historyItems = [];
        for(let i = 0; i < this.props.history.length; i+=1) {
            let item = this.props.history[i];
            let itemRow = (<tr key={i}>
                            <td>{i}</td>
                            <td>{item.value}</td>
                           </tr>);
            historyItems.push(itemRow);
        }
        return (
            <div>
                <h2>History</h2>
                <table>
                    <tbody>
                        {/* hitoryItems is an array of tr's */}
                        {historyItems}
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