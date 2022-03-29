import React, { useEffect, useState } from 'react';
import axios from 'axios';

// take in each of the players in player list
const CardMovement = (props) => {
    const { deck } = props;

    [ player1Deck, setPlayer1Deck ] = useState([]);
    [ player2Deck, setPlayer2Deck ] = useState([]);
    [ player3Deck, setPlayer3Deck ] = useState([]);
    [ player4Deck, setPlayer4Deck ] = useState([]);
    [ player5Deck, setPlayer5Deck ] = useState([]);
    [ player6Deck, setPlayer6Deck ] = useState([]);

    useEffect(() => {
        axios.get(`https://deckofcardsapi.com/api/deck/${props.deck.deck_id}/pile/${player.deck}/add/?cards=AS,2S`)
            .then(res=>{setPlayer1Deck(res.data)})
            console.log(player1Deck)
    }, []);
    return(
        <div>
            { player1Deck }
        </div>
    )
}

export default CardMovement;
