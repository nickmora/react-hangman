import React, { useState, useEffect } from 'react';
import MysteryWord from './MysteryWord';
import LetterBank from './LetterBank';

const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [guessedLetters, setGuessedLetters] = useState([])
    const [word, setWord] = useState("test word one")
    useEffect(() => {
        document.onkeyup = (event) => {
            console.log(event)
            if (/[a-z]/.test(event.key.toLowerCase())) {
                if (guessedLetters.includes(event.key.toLowerCase())) {
                    alert("You already guessed that one, silly")
                }
                else {
                    if (word.split("").includes(event.key.toLowerCase())) {
                        console.log("gotcha");
                        setGuessedLetters([event.key.toLowerCase(), ...guessedLetters])
                        console.log(guessedLetters)
                    }
                    else {
                        console.log("nope, that one's not in the word")
                        setGuessedLetters([event.key.toLowerCase(), ...guessedLetters])
                    }
                }
            }
            else {
                alert("Try guessing a letter, doofus")
            }

        }
    })
    return (
        <div>
            <MysteryWord word={word} />
            <LetterBank letters={guessedLetters} />

        </div>
    );
}

export default Game;