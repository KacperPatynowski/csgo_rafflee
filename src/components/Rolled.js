import React, {Component} from 'react';
import './stylesheet.css'

class Rolled extends Component {



    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <center>

                    <span>{this.props.msg}</span>
                    <br/>
                    <div className="buttons-wrap">
                        <button onClick={this.props.handleClick} className="button-roll">Roll</button>
                        <button onClick={this.props.handleReset} className="button-reset">Reset</button>
                    </div>
                    </center>

            </div>
        );
    }
}

export default Rolled;