import React, { Component } from 'react';

import NumberContext from './NumberContext';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 5
        };
    }

    updateNumber = () => {
        this.setState({
            number: Math.random()
        });
    }

    render() {
        return (
            <NumberContext.Provider value={{
                number: this.state.number,
                updateNumber: this.updateNumber
            }}>
                {this.props.children}
            </NumberContext.Provider>
        );
    }
}