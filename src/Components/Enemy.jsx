import PropTypes from 'prop-types';

const Enemy = ({ data }) => {
    return (
        <div>
            <p>Ennemi PV: {data.pv}</p>
            <p>Ennemi Attaque: {data.attack}</p>
        </div>
    );
};

Enemy.propTypes = {
    data: PropTypes.shape({
        pv: PropTypes.number.isRequired, // Validation pour data.pv
        attack: PropTypes.number.isRequired // Validation pour data.attack
    }).isRequired
};

export default Enemy;
