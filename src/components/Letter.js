import React, { useState, useEffect } from 'react';

const Letter = (props) => {
    const [hidden, setHidden] = useState(true);
    useEffect(()=>{if(props.guessed) setHidden(false)}, [props.guessed])
    return (
        (props.value === " ") ?
            <span className="letter">
                &nbsp; &nbsp;
            </span>
            :
            hidden ?
                <span className="letter">
                    __
                </span>
                :
                <span className="letter">
                    {props.value} &nbsp;
                </span>
    );
}

export default Letter;