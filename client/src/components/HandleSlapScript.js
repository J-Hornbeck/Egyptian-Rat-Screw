import React, { useState } from "react";
import { useEffect } from "react";

class HandleSlapScript extends React.Component {
    constructor(props) {
        // const { drawPile, game } = props;
        // [ myGameRules, setMyGameRules ] = useState({});
        super(props);
        this.state = {
            message: ""
        };
        this.handleSlap = this.handleSlap.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }
    // change code above this line
    handleSlap() {
        this.setState({
            message: this.state.message + "You pressed the space bar! "
        });
        console.log("Slapped");
        // if(myGameRules.slapRule1 === "on"){
        //     if(drawPile[drawPile.length-1].value === drawPile[drawPile.length-2].value) {
        //         console.log("slap is valid")
        //         console.log("doubles")
        //         for(var card of drawPile) {
        //             console.log(card)
        //             let cardToGain = drawPile.pop();
        //             player.deck.push(cardToGain)
        //         }
        //         console.log(player.deck)
        //     } else {
        //         let card1ToAdd = player.deck.pop()
        //         let card2ToAdd = player.deck.pop()
        //         drawPile.push(card1ToAdd)
        //         drawPile.push(card2ToAdd)
        //         // need to splice the array and add to middle of pile
        //     }
        // } 
        // if(myGameRules.slapRule2 === "on"){
        //     if(drawPile[drawPile.length-1].value === drawPile[drawPile.length-3].value) {
        //         console.log("slap is valid")
        //         console.log("sandwich")
        //         for(var card of drawPile) {
        //             console.log(card)
        //             let cardToGain = drawPile.pop();
        //             player.deck.push(cardToGain)
        //         }
        //         console.log(player.deck)
        //     } else {
        //         let card1ToAdd = player.deck.pop()
        //         let card2ToAdd = player.deck.pop()
        //         drawPile.push(card1ToAdd)
        //         drawPile.push(card2ToAdd)
        //         // need to splice the array and add to middle of pile
        //     }
        // } 
        // if(myGameRules.slapRule3 === "on"){
        //     if(drawPile[drawPile.length-1].value === drawPile[0].value) {
        //         console.log("slap is valid")
        //         console.log("same as first")
        //         for(var card of drawPile) {
        //             console.log(card)
        //             let cardToGain = drawPile.pop();
        //             player.deck.push(cardToGain)
        //         }
        //         console.log(player.deck)
        //     } else {
        //         let card1ToAdd = player.deck.pop()
        //         let card2ToAdd = player.deck.pop()
        //         drawPile.push(card1ToAdd)
        //         drawPile.push(card2ToAdd)
        //         // need to splice the array and add to middle of pile
        //     }
        // }
    }

    handleKeyPress(event) {
        if (event.keyCode === 32) {
            this.handleSlap();
        }
    }
    render() {
        return (
            <div>
                <p>Will it work?</p>
                <h1>{this.state.message}</h1>
            </div>
        );
    };
}

export default HandleSlapScript;