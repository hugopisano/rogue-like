import React from 'react';

const Room = ({ data, onCombat, onHeal, onUpgrade }) => {
    return (
        <div>
            <p>Type de Salle: {data.type}</p>
            {data.type === 'enemy' || data.type === 'boss' ? (
                <button onClick={onCombat}>Combat</button>
            ) : null}
            {data.type === 'heal' ? (
                <button onClick={onHeal}>Se soigner</button>
            ) : null}
            {data.type === 'upgrade' ? (
                <button onClick={onUpgrade}>Améliorer l'attaque</button>
            ) : null}
        </div>
    );
};

export default Room;
