import React from 'react'
import PropTypes from 'prop-types';

const Joueurs = ({ data }) => {

    return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: 12 }}>
            <h3>Joueur 1</h3>
            <div className="" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px" }}>
                <span>{data.pv} hp</span>
                <span>{data.attack} dégats</span>
            </div>
        </div>
    )
}

Joueurs.propTypes = {
    data: PropTypes.shape({
        pv: PropTypes.number.isRequired, // Validation pour data.pv
        attack: PropTypes.number.isRequired // Validation pour data.attack
    }).isRequired
};

export default Joueurs