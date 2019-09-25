import React, {useState} from 'react';
import MysteryWord from './MysteryWord';
import LetterBank from './LetterBank';

const Game = () => {
    const [gameOver, setGameOver] = useState(false);
    const [guessedLetters, setGuessedLetters] = useState([])
    const [word, setWord] = useState("test word one")
    return (
        <div>
            <MysteryWord word = "pododlle" />
            <LetterBank letters = {guessedLetters} />

        </div>
    );
}
 
export default Game;