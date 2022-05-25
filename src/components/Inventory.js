import React, {Component} from 'react';
import './stylesheet.css'

const Inventory = (props) => {



    return (
            <div className="inventory">
                {props.winningItem.map((el, index) => (<div className={`item card ${el.skinClass}`} key={index}></div>))}
            </div>
        );
    }


export default Inventory;