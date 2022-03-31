import React, { useState } from "react";
import { useEffect } from "react";

const HandleSlapScript = (props) => {
    const { drawPile, game } = props;
    [ myGameRules, setMyGameRules ] = useState({});

    useEffect(() => {
        axios.get(`https://localhost/3000/games/${game.id}`)
            .then(res=>{setMyGameRules(res.data)})
    }, []);

    document.body.onkeydown = ("keydown",(e) => {  
        if (e.which === 32) {
            console.log("Slapped");
            if(myGameRules.slapRule1 === "on"){
                if(drawPile[drawPile.length-1].value === drawPile[drawPile.length-2].value) {
                    console.log("slap is valid")
                    console.log("doubles")
                    for(var card of drawPile) {
                        console.log(card)
                        let cardToGain = drawPile.pop();
                        player.deck.push(cardToGain)
                    }
                    console.log(player.deck)
                } else {
                    let card1ToAdd = player.deck.pop()
                    let card2ToAdd = player.deck.pop()
                    drawPile.push(card1ToAdd)
                    drawPile.push(card2ToAdd)
                    // need to splice the array and add to middle of pile
                }
            } 
            if(myGameRules.slapRule2 === "on"){
                if(drawPile[drawPile.length-1].value === drawPile[drawPile.length-3].value) {
                    console.log("slap is valid")
                    console.log("sandwich")
                    for(var card of drawPile) {
                        console.log(card)
                        let cardToGain = drawPile.pop();
                        player.deck.push(cardToGain)
                    }
                    console.log(player.deck)
                } else {
                    let card1ToAdd = player.deck.pop()
                    let card2ToAdd = player.deck.pop()
                    drawPile.push(card1ToAdd)
                    drawPile.push(card2ToAdd)
                    // need to splice the array and add to middle of pile
                }
            } 
            if(myGameRules.slapRule3 === "on"){
                if(drawPile[drawPile.length-1].value === drawPile[0].value) {
                    console.log("slap is valid")
                    console.log("same as first")
                    for(var card of drawPile) {
                        console.log(card)
                        let cardToGain = drawPile.pop();
                        player.deck.push(cardToGain)
                    }
                    console.log(player.deck)
                } else {
                    let card1ToAdd = player.deck.pop()
                    let card2ToAdd = player.deck.pop()
                    drawPile.push(card1ToAdd)
                    drawPile.push(card2ToAdd)
                    // need to splice the array and add to middle of pile
                }
            } 
        }
    });

}

export default HandleSlapScript;