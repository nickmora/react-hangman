import React, { useEffect } from 'react';

const LetterBank = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div>
            {props.letters.length ?
                props.letters.map(letter => {
                    return (
                        <span>
                            {letter}
                        </span>
                    )
                })
                :
                <div>
                    Guess a letter
                </div>
            }
        </div>
    );
}

export default LetterBank;