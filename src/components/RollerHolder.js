import React, {Component} from 'react';
import RollerContainer from "./RollerContainer";
import './stylesheet.css'

class RollerHolder extends Component {

    render() {
        return (
            <div className="roller-holder">
                {this.props.children}
            </div>
        );
    }
}

export default RollerHolder;