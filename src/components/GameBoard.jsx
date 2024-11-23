import React from "react"

import { useState } from "react"



function GameBoard({word}) {

    const [letters, setLetters] = useState([]);


    var list = document.getElementById("list");
    var input = document.getElementById("input")

    let testWord = 'test';

    var lives = 3;
    const display = () =>{
        const letterElement = testWord.split('').map(( _, index ) => ({
            id: `letter${index}`,
            value: '_',
        }));

        setLetters(letterElement);
    }

    React.useEffect(() => { 
        if(testWord.length > 0){
            display()
        }
    }, []);

    

    function submit(e){
        if (e.key === 'Enter'){
            
            // get the letter
            const input = e.target.value.toLowerCase();
            
            // clear the input field
            e.target.value = '';


            if(testWord.includes(input)) {
                // update the letters with the guessed letter 
                const correctLetter = letters.map((letter, index) => ({
                    ...letter, 
                    value : testWord[index] === input ? input : letter.value,
                }));

                setLetters(correctLetter);

            } else {
                console.log('not correct')
            }
        }
    }


    return (
        <>
        <div>
            <div className="lives">
                <ul>
                    <li><div className="life-1">life 1</div></li>
                    <li><div className="life-2">life 2</div></li>
                    <li><div className="life-3">life 3</div></li>
                </ul>

            </div>

            <div className="letters">            
                <ul id="list">
                    {letters.map((letter) => (
                        <li key={letter.id} id={letter.id}>
                            {letter.value}
                        </li>
                    ))}
                </ul>
            </div>

            <div className = "input">
                <input 
                type="text" 
                id="input" 
                placeholder="Please enter a single letter" 
                maxLength={1}
                onKeyDown={submit}></input>
            </div>
        </div>
        </>
    )
}




export default GameBoard;

