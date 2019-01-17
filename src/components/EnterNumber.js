import React, { Component } from 'react';

class EnterNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputNumber: 0,
            anotherNumber: 3,
        };
    }

    handleChange = (event) => {
        this.setState({
            // event.target.value will be a string
            inputNumber: parseInt(event.target.value)
        });
    }

    handleUpClick = () => {
        // Call the updateTotal function of App.js
        this.props.updateTotal(this.state.inputNumber);
    }

    handleDownClick = () => {
        // Pass a negative number to updateTotal
        this.props.updateTotal(0 - this.state.inputNumber);
    }

    render() {
        return (
            <div>
                EnterNumber State: {JSON.stringify(this.state)}
                <input onChange={this.handleChange} type="number" />
                <button onClick={this.handleUpClick}>Up</button>
                <button onClick={this.handleDownClick}>Down</button>
            </div>
        );
    }
}

export default EnterNumber;