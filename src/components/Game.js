import React, { useState, useEffect } from 'react';
import MysteryWord from './MysteryWord';
import LetterBank from './LetterBank';
import GameOverModal from './GameOverModal';

const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [word, setWord] = useState("test word one");
    const [guesses, setGuesses] = useState(10);
    const compressed = Array.from(new Set(word.replace(/\s/g, "").split(""))).length;
    const [lettersLeft, setLettersLeft] = useState(compressed);
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        document.onkeyup = (event) => {
            if (/[a-z]/.test(event.key.toLowerCase())) {
                if (guessedLetters.includes(event.key.toLowerCase())) {
                    alert("You already guessed that one, silly")
                }
                else {
                    if (word.split("").includes(event.key.toLowerCase())) {
                        setGuessedLetters([...guessedLetters, event.key.toLowerCase()])
                        // setLettersLeft(lettersLeft.delete(event.key.toLowerCase));
                        // console.log(lettersLeft)
                        setLettersLeft(lettersLeft-1);
                        console.log(guessedLetters);
                        // console.log(compressed)
                    }
                    else {
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
        if (guesses <= 0) {
            setGameOver(true)
            // alert("YOU LOSE")
        }
    }, [guesses]);

    useEffect(()=>{
        if(lettersLeft<=0){
            setGameOver(true);
        }
    }, [lettersLeft]);
    useEffect(()=>{
        gameOver ?
            setModalOpen(true)
            :
            setModalOpen(false)
    }, [gameOver]);
    return (
        <div>
            <p>
                Guesses left: {guesses}
            </p>
            <MysteryWord word={word} letters={guessedLetters.filter(letter => word.split("").includes(letter))} />
            <LetterBank letters={guessedLetters.filter(letter => !word.split("").includes(letter))} />
            {modalOpen ? <GameOverModal /> : <GameOverModal hidden />}
            {/* <button onClick={openModal}>click me</button> */}
        </div>
    );
}

export default Game;