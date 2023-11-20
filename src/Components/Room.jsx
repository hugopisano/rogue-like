import React from 'react';
import PropTypes from 'prop-types'; // Importez PropTypes

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

// Définition des PropTypes pour Room
Room.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string.isRequired // Assurez-vous que data.type est une chaîne de caractères et qu'elle est requise
    }).isRequired,
    onCombat: PropTypes.func, // onCombat est une fonction
    onHeal: PropTypes.func, // onHeal est une fonction
    onUpgrade: PropTypes.func // onUpgrade est une fonction
};

export default Room;
