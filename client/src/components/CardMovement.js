// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // take in each of the players in player list
// const CardMovement = (props) => {
//     const { game } = props;

//     const [ player1Deck, setPlayer1Deck ] = useState([]);
//     const [ player2Deck, setPlayer2Deck ] = useState([]);
//     const [ player3Deck, setPlayer3Deck ] = useState([]);
//     const [ player4Deck, setPlayer4Deck ] = useState([]);
//     const [ player5Deck, setPlayer5Deck ] = useState([]);
//     const [ player6Deck, setPlayer6Deck ] = useState([]);
//     const [ deck, setDeck ] = useState([])
//     const [ numOfPlayers, setNumOfPlayers ] = useState()

//     // useEffect(() => {
//     //     axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${player.deck}/add/?cards=AS,2S`)
//     //         .then(res=>{setPlayer1Deck(res.data)})
//     //         console.log(player1Deck)
//     // }, []);

//     useEffect(() => {
//         axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//             .then(res=>{setDeck(res.data)})
//     }, []);

//     setNumOfPlayers = 4
//     // add a button to the game board to start game, this will trigger the deal cards event
//     const dealCards = (e) => {

//         // divides 52 cards evenly between 2 piles, 2 piles of 26
//         if (numOfPlayers == 2) {

//             // player 1's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=26`)
//                     .then(res=>{setPlayer1Deck(res.data)})
//                     console.log(player1Deck)
//             }, []);

//             //player 2's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=26`)
//                     .then(res=>{setPlayer2Deck(res.data)})
//                     console.log(player2Deck)
//             }, []);

//         // divides 52 cards between 3 piles, 2 piles of 17, one pile of 18
//         } else if (numOfPlayers == 3) {

//             // player 1's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=18`)
//                     .then(res=>{setPlayer1Deck(res.data)})
//                     console.log(player1Deck)
//             }, []);

//             // player 2's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=17`)
//                     .then(res=>{setPlayer2Deck(res.data)})
//                     console.log(player2Deck)
//             }, []);

//             // player 3's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=17`)
//                     .then(res=>{setPlayer3Deck(res.data)})
//                     console.log(player3Deck)
//             }, []);

//         // divides 52 cards  evenly between 4 piles, 4 piles of 13
//         } else if (numOfPlayers == 4) {

//             // player 1's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=13`)
//                     .then(res=>{setPlayer1Deck(res.data)})
//                     console.log(player1Deck)
//             }, []);

//             // player 2's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=13`)
//                     .then(res=>{setPlayer2Deck(res.data)})
//                     console.log(player2Deck)
//             }, []);

//             // player 3's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=13`)
//                     .then(res=>{setPlayer3Deck(res.data)})
//                     console.log(player3Deck)
//             }, []);

//             // player 4's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=13`)
//                     .then(res=>{setPlayer4Deck(res.data)})
//                     console.log(player4Deck)
//             }, []);

//         // divides 52 cards between 5 piles, 3 piles of 10, 2 piles of 11
//         } else if (numOfPlayers == 5) {
//             // player 1's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=11`)
//                     .then(res=>{setPlayer1Deck(res.data)})
//                     console.log(player1Deck)
//             }, []);

//             // player 2's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=11`)
//                     .then(res=>{setPlayer2Deck(res.data)})
//                     console.log(player2Deck)
//             }, []);

//             // player 3's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=10`)
//                     .then(res=>{setPlayer3Deck(res.data)})
//                     console.log(player3Deck)
//             }, []);

//             // player 4's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=10`)
//                     .then(res=>{setPlayer4Deck(res.data)})
//                     console.log(player4Deck)
//             }, []);

//             // player 5's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=10`)
//                     .then(res=>{setPlayer5Deck(res.data)})
//                     console.log(player5Deck)
//             }, []);

//         // divdes deck into 6 piles for 6 players
//         } else {

//             // player 1's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=9`)
//                     .then(res=>{setPlayer1Deck(res.data)})
//                     console.log(player1Deck)
//             }, []);

//             // player 2's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=9`)
//                     .then(res=>{setPlayer2Deck(res.data)})
//                     console.log(player2Deck)
//             }, []);

//             // player 3's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=9`)
//                     .then(res=>{setPlayer3Deck(res.data)})
//                     console.log(player3Deck)
//             }, []);

//             // player 4's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=9`)
//                     .then(res=>{setPlayer4Deck(res.data)})
//                     console.log(player4Deck)
//             }, []);

//             // player 5's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=8`)
//                     .then(res=>{setPlayer5Deck(res.data)})
//                     console.log(player5Deck)
//             }, []);

//             // player 6's deck
//             useEffect(() => {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=8`)
//                     .then(res=>{setPlayer6Deck(res.data)})
//                     console.log(player6Deck)
//             }, []);
//         }
//     }
//     return(
//         <div>
//             <button onClick = {dealCards}> click me</button>

//         </div>
//     )
// }

// export default CardMovement;
