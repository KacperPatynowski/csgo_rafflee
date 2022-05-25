import React, {Component} from 'react';
import Inventory from './Inventory';
import RollerHolder from './RollerHolder';
import RollerContainer from './RollerContainer';
import Rolled from './Rolled';
import './stylesheet.css'
import inventory from "./Inventory";
import {unmountComponentAtNode} from "react-dom";

class App extends Component {

    state = {
        msg: "Roll To Start",
        x: [],
        animationState: false,
        inventory: [],
    }

    // constructor(){
    //     super();
    //
    //     this.randomInt=this.randomInt.bind(this);
    //     this.openCase=this.openCase.bind(this);
    //     this.randomInt=this.randomInt.bind(this);
    //     this.handleClick=this.handleClick.bind(this);
    //     this.winningItem=this.winningItem.bind(this);
    // }

    openCase = (skins) => {
        const y = [];

        let skinClass = "blue";

        for(let i = 0; i < 100; i++){
            let random = this.randomInt(1, 100);

            console.log(random);

            if(random < 10) skinClass = "yellow"
            if(random < 80) skinClass = "purple";
            if(random < 60) skinClass = "pink";
            if(random < 40) skinClass = "red";
            if(random < 25) skinClass = "blue";

            y.push({skinClass})

        };

        let prize = y[60].skinClass;

        setTimeout(() => this.handleMessageChange(prize), 7000)

        console.log(y)
        this.setState((prevState) => ({...prevState, x: y, animationState: !prevState.animationState }))

    };


    handleMessageChange = (prize) =>{


        if(prize === "blue"){
            this.setState(() =>
                ({msg: "You won blue skin!"})
            )
        }
        else if(prize === "pink"){
            this.setState(() =>
                ({msg: "You won pink skin!"})
            )
        }
        else if(prize === "purple"){
            this.setState(() =>
                ({msg: "You won purple skin!"})
            )
        }
        else if(prize === "red"){
            this.setState(() =>
                ({msg: "You won red skin!"})
            )
        }
        else if(prize === "yellow"){
            this.setState(() =>
                ({msg: "You won yellow skin!"})
            )
        }

    }

    animationChange = () => {

        console.log(this.state.animationState)
        this.setState(() => ({animationState: false}))
    }

    randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    handleClick = () => {

        this.openCase();

    }

    winningItem = (item) => {
        this.setState(prevState => ({...prevState, inventory: [...prevState.inventory, item] }) )
    }


    render() {
        return (
            <div className="raffle">
                <br/>
                <RollerHolder >
                    <RollerContainer animationState={this.state.animationState} winningItem={this.winningItem} skins={this.state.x}/>
                </RollerHolder>
                <br/>
                <Rolled handleClick={this.handleClick} handleReset={this.animationChange} msg={this.state.msg} />
                <br/>
                <Inventory winningItem={this.state.inventory}/>
            </div>

        );

    }
}

export default App;