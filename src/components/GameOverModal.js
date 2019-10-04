import React from 'react';

const GameOverModal = (props) => {
    return (
        <div className={props.hidden ? "modalClosed" : "modalOpen"}>
            <div className = "modalContent">
                Did you want to play again?
            <div>
                    <button onClick = {props.resetGame}>
                        Yes
                    </button>
                    <button>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameOverModal;