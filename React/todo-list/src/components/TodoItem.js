import React, { Component } from 'react';
import PropTypes from 'prop-types';

import check from '../img/check.svg';
import checkComplete from '../img/checkcomplete.svg';
import './TodoItem.css';
var classNames = require('classnames');

export default class TodoItem extends Component {

    render() {
        const { item, onClick } = this.props;
        let url = check;
        if(item.isCompleted) {
            url = checkComplete;
        }
        var todoClass = classNames({
            'TodoItem': true,
            'TodoItem-complete': item.isCompleted,
        })
        return (
            <div onClick={onClick} className={todoClass}>
                <img src={url} width={32} />
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isCompleted: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func,
}