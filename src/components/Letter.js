import React, {useState} from 'react';

const Letter = (props) => {
    const [hidden, setHidden] = useState(true);
    return (
        hidden?
            <p>
                __
            </p>
            :
            <p>
                {props.value}
            </p>
    );
}
 
export default Letter;