import React, { Component } from 'react';

class EnterNumber extends Component {

    constructor() {
        super();
        this.state = {
            inputNumber: 0,
        };
    }

    handleChange = (event) => {
        this.setState({
            // event.target.value will be a string
            inputNumber: parseInt(event.target.value)
        });
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <input onChange={this.handleChange} type="text" />
                <button>Up</button>
            </div>
        );
    }
}

export default EnterNumber;