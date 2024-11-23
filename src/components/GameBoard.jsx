
import React from "react"


function GameBoard({word}) {
    var list = document.getElementById("list");
    var input = document.getElementById("input")
    var lives = 3;
    const display = (word) =>{
        for (i = 0; i<word.length; i++){
            var listElement = document.createElement("li");
            listElement.idName = `letter${[i]}`;
            listElement.innerHTML = '_';
            list.append(listElement);
        };
    }

    input.addEventListener("keypress", function(e){
        if (e === 'Enter'){
            const UserInput = document.getElementById("input").value.trim
            if (UserInput.length != 1){
                alert("Please enter a single letter")
                UserInput.value = ''
            } else {
                if (word.includes(UserInput)){
                    for (i = 0; i<word.length; i++){
                        if (UserInput === word[i]){
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
    })
    return (
        <>
        <div>
            <div class="lives">
                <li>
                    <ul><div class="life-1"></div></ul>
                    <ul><div class="life-2"></div></ul>
                    <ul><div class="life-3"></div></ul>
                </li>

            </div>
            <div class="letters">
            <li id = "list">
            </li>
            </div>
            <div class = "input">
                <input type="text" id="input" placeholder="Please enter a single letter"></input>
            </div>
        </div>
        </>
    )
}



export default GameBoard;
