import React from 'react';
import Letter from "./Letter"

const MysteryWord = (props) => {
    return (
        props.word.split("").map(letter=><Letter value = {letter} />)
    );
}
 
export default MysteryWord;