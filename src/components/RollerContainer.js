import React, {Component, useEffect} from 'react';
import './stylesheet.css'



const RollerContainer = ({skins = 0, animationState, winningItem}) => {


    //skins[61] bo animacja konczy sie na obrazku z takim indexem
    useEffect(() => {
        if (!(skins[60] === undefined) && (animationState === true) ) {
            winningItem(skins[60])
        }
    }, [animationState] );



        return (
            <div className="poiner">
                <div id="basic" className={`roller-container ${animationState && ("animation")}`}>
                    {skins.map((el, index) => (<div className={`card ${el.skinClass}`} key={index}></div>))}
                </div>
            </div>

        );
    };



export default RollerContainer;


