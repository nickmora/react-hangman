import React, { useState, useEffect } from 'react';

const Letter = (props) => {
    const [hidden, setHidden] = useState(true);
    useEffect(()=>{if(props.guessed) setHidden(false)}, [props.guessed])
    return (
        (props.value === " ") ?
            <span>
                &nbsp; &nbsp;
            </span>
            :
            hidden ?
                <span>
                    __ &nbsp;
                </span>
                :
                <span>
                    {props.value} &nbsp;
                </span>
    );
}

export default Letter;