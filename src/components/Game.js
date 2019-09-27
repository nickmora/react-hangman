import React, { useState, useEffect } from 'react';
import MysteryWord from './MysteryWord';
import LetterBank from './LetterBank';

const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [guessedLetters, setGuessedLetters] = useState([])
    const [word, setWord] = useState("test word one")
    const [guesses, setGuesses] = useState(10);
    const compressed = Array.from(new Set(word.replace(/\s/g, "").split(""))).length;
    const [lettersLeft, setLettersLeft] = useState(compressed)
    useEffect(() => {
        document.onkeyup = (event) => {
            // console.log(event)
            if (/[a-z]/.test(event.key.toLowerCase())) {
                if (guessedLetters.includes(event.key.toLowerCase())) {
                    alert("You already guessed that one, silly")
                }
                else {
                    if (word.split("").includes(event.key.toLowerCase())) {
                        // console.log("gotcha");
                        setGuessedLetters([...guessedLetters, event.key.toLowerCase()])
                        // setLettersLeft(lettersLeft.delete(event.key.toLowerCase));
                        // console.log(lettersLeft)
                        setLettersLeft(lettersLeft-1);
                        console.log(guessedLetters);
                        // console.log(compressed)
                    }
                    else {
                        console.log("nope, that one's not in the word")
                        setGuessedLetters([...guessedLetters, event.key.toLowerCase()])
                        setGuesses(guesses - 1)
                    }
                }
            }
            else {
                alert("Try guessing a letter, doofus")
            }

        }
    });
    useEffect(() => {
        if (guesses <= 0) setGameOver(true)
    }, [guesses])
    // useEffect(() => {
    //     if (word.split("").map(letter => guessedLetters.includes(letter))) {
    //         alert("Game Over!")
    //         setGameOver(true)
    //     }
    // }, [guessedLetters])
    
    useEffect(()=>{
        if(lettersLeft<=0){
            alert("You win!");
            setGameOver(true);
        }
    }, [lettersLeft])
    return (
        <div>
            <p>
                Guesses left: {guesses}
            </p>
            <MysteryWord word={word} letters={guessedLetters.filter(letter => word.split("").includes(letter))} />
            <LetterBank letters={guessedLetters.filter(letter => !word.split("").includes(letter))} />
        </div>
    );
}

export default Game;