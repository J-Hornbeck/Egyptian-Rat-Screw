import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, FormControl } from 'react-bootstrap';

const NewGameForm = (props) => {

    const[ numOfPlayers, setNumOfPlayers ] = useState();
    // doubles
    const[ slapRule1, setSlapRule1 ] = useState("");
    // sandwich
    const[ slapRule2, setSlapRule2 ] = useState("");
    // same as first
    const[ slapRule3, setSlapRule3 ] = useState("");
    // marriage
    // const[ slapRule4, setSlapRule4 ] = useState("");
    // // adds to 10
    // const[ slapRule5, setSlapRule5 ] = useState("");
    // // run of 4
    // const[ slapRule6, setSlapRule6 ] = useState("");
    // created from deck of cards api call
    const [ deck, setDeck ] = useState({});
    // same as deck.deck_id
    const [ code, setCode ] = useState("");


    useEffect(() => {
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(res=>{setDeck(res.data)})
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("this is the deck")
        console.log(deck);
        console.log(code);
        axios.post('http://localhost:8000/api/games', {
            numOfPlayers,
            slapRule1,
            slapRule2,
            slapRule3,
            // slapRule4,
            // slapRule5,
            // slapRule6,
            deck,
            code: deck.deck_id
        })

            .then((res) => {
                // console.log(res);
                console.log(res.data.game);
                setNumOfPlayers();
                setSlapRule1("");
                setSlapRule2("");
                setSlapRule3("");
                // setSlapRule4("");
                // setSlapRule5("");
                // setSlapRule6("");
                setCode("");
            })
            
            .catch((err) => {
                console.log(err)
            });
        
        
    };


    return (
        <div>

            <h1>Start New Game</h1>
            <Form onSubmit={submitHandler}>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Doubles"
                    onChange={(e)=>setSlapRule1(e.target.value)}
                />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Sandwich"
                    onChange={(e)=>setSlapRule2(e.target.value)}
                />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Same as First"
                    onChange={(e)=>setSlapRule3(e.target.value)}
                />
                {/* Set up to add additional slap rules */}
                {/* <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Marriage"
                    onChange={(e)=>setSlapRule4(e.target.value)}
                />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Adds to 10"
                    onChange={(e)=>setSlapRule5(e.target.value)}
                />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Run of 4"
                    onChange={(e)=>setSlapRule6(e.target.value)}
                /> */}
                <Button type="submit">Create New Game</Button>
            </Form>
            <div>
                <h4>New Game Code: </h4>
                    <h5>{ deck.deck_id }</h5>
            </div>
        </div>
    )
}

export default NewGameForm;