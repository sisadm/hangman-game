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
        if (e === 'Enter'){
            const UserInput = document.getElementById("input").value.trim
            if (UserInput.length != 1){
                alert("Please enter a single letter")
                UserInput.value = ''
            } else {
                if (testWord.includes(UserInput)){
                    for (i = 0; i<testWord.length; i++){
                        if (UserInput === testWord[i]){
                            console.log('hello')
                        }
                    }
                } else {
                    alert("Wrong!")
                    if (lives < 4){
                        lives = lives - 1
                        var life = document.life
                        life.classList.toggle("lose-life")
                    } else {
                        if (lives = 0){
                            console.log("hello")
                        }
                    }


                }

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
                <input type="text" id="input" placeholder="Please enter a single letter" 
                onKeyDown={submit()}></input>
            </div>
        </div>
        </>
    )
}




export default GameBoard;

