import React, { Component } from "react";
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

export default class TrafficeLight extends Component {

    render() {
        const { currentColor } = this.props;
        return (
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {active: currentColor === RED})}></div>
                <div className={classNames('bulb', 'yellow', {active: currentColor === YELLOW})}></div>
                <div className={classNames('bulb', 'green', {active: currentColor === GREEN})}></div>
            </div>
        );
    }
}