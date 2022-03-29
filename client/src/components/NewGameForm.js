import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const NewGameForm = (props) => {
    const[ numOfPlayers, setNumOfPlayers ] = useState();
    // doubles
    const[ slapRule1, setSlapRule1 ] = useState(false);
    // sandwich
    const[ slapRule2, setSlapRule2 ] = useState(false);
    // same as first
    const[ slapRule3, setSlapRule3 ] = useState(false);
    // marriage
    const[ slapRule4, setSlapRule4 ] = useState(false);
    // adds to 10
    const[ slapRule5, setSlapRule5 ] = useState(false);
    // run of 4
    const[ slapRule6, setSlapRule6 ] = useState(false);
    // created from deck of cards api call
    const [ deck, setDeck ] = useState({});
    // random string of 6 characters
    const [ code, setCode ] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/games', {
            numOfPlayers,
            slapRule1,
            slapRule2,
            slapRule3,
            slapRule4,
            slapRule5,
            slapRule6,
            deck,
            code
        })

            .then((res) => {
                // console.log(res);
                console.log(res.data.game);
                
                setNumOfPlayers()
                setSlapRule1(false);
                setSlapRule2(false);
                setSlapRule3(false);
                setSlapRule4(false);
                setSlapRule5(false);
                setSlapRule6(false);
                setDeck({});
                setCode("");
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <div>
            <Form>
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
                <Form.Check 
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
                />
                <Button type="submit">Create New Game</Button>
            </Form>
        </div>
    )
}

export default NewGameForm;