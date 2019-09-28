import React, { useEffect } from 'react';

const LetterBank = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div className="letterBank">
            <div>

                {props.letters.length ?
                    <div>
                        <p>
                            Letters You've Guessed:
                        </p>
                        {props.letters.map(letter => {
                            return (
                                <span className = "guessedLetter">
                                    {letter}
                                </span>
                            )
                        })}
                    </div>
                    :
                    <div>
                        Guess a letter
                </div>
                }
            </div>
        </div>
    );
}

export default LetterBank;