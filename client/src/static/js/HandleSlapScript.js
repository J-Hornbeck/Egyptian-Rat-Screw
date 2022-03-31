import React, { useState } from "react";
import { useEffect } from "react";

const HandleSlapScript = (props) => {
    const { game, player} = props;
    
    useEffect(() => {
        if(game.slapRule1 === "on"){
            if(game.drawPile[game.drawPile.length-1].value === game.drawPile[game.drawPile.length-2].value) {
                console.log("slap is valid")
                console.log("doubles")
                for(var card of game.drawPile) {
                    console.log(card)
                    let cardToGain = game.drawPile.pop();
                    player.deck.push(cardToGain)
                }
                console.log(player.deck)
            } else {
                let card1ToAdd = player.deck.pop()
                let card2ToAdd = player.deck.pop()
                game.drawPile.push(card1ToAdd)
                game.drawPile.push(card2ToAdd)
                // need to splice the array and add to middle of pile
            }
        } 
        if(game.slapRule2 === "on"){
            if(game.drawPile[game.drawPile.length-1].value === game.drawPile[game.drawPile.length-3].value) {
                console.log("slap is valid")
                console.log("sandwich")
                for(var card of game.drawPile) {
                    console.log(card)
                    let cardToGain = game.drawPile.pop();
                    player.deck.push(cardToGain)
                }
                console.log(player.deck)
            } else {
                let card1ToAdd = player.deck.pop()
                let card2ToAdd = player.deck.pop()
                game.drawPile.push(card1ToAdd)
                game.drawPile.push(card2ToAdd)
                // need to splice the array and add to middle of pile
            }
        } 
        if(game.slapRule3 === "on"){
            if(game.drawPile[game.drawPile.length-1].value === game.drawPile[0].value) {
                console.log("slap is valid")
                console.log("same as first")
                for(var card of game.drawPile) {
                    console.log(card)
                    let cardToGain = game.drawPile.pop();
                    player.deck.push(cardToGain)
                }
                console.log(player.deck)
            } else {
                let card1ToAdd = player.deck.pop()
                let card2ToAdd = player.deck.pop()
                game.drawPile.push(card1ToAdd)
                game.drawPile.push(card2ToAdd)
                // need to splice the array and add to middle of pile
            }
        }
    }

    )}

export default HandleSlapScript;