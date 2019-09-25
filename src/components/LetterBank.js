import React from 'react';

const LetterBank = (props) => {
    return (
        <div>
            {props.letters ?
                <div />
                :
                props.letters.map(letter => {
                    return (
                        <p>
                            {letter.value}
                        </p>
                    )
                })
            }
        </div>
    );
}

export default LetterBank;