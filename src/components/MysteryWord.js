import React from 'react';
import Letter from "./Letter"
import uuid from "uuid/v4"

const MysteryWord = (props) => {
    return (
        <div className = "mysteryWord">
            {props.word.split("").map(letter => {
                return (
                    props.letters.includes(letter) ?
                        <Letter key = {uuid()} value={letter} guessed />
                        :
                        <Letter key = {uuid()} value={letter} />
                )
            })}
        </div>
    );
}

export default MysteryWord;