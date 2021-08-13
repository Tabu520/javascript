import './Count.css'
import React, { Component, useState } from 'react'

export default function () {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2> {count}</h2>
            <button className="button" onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}