import React from 'react';
import Letter from "./Letter"

const MysteryWord = (props) => {
    return (
        props.word.split("").map(letter => {
            return (
                props.letters.includes(letter) ?
                    <Letter value={letter} guessed />
                :
                    <Letter value={letter} />
            )
        })
    );
}

export default MysteryWord;