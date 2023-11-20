const Enemy = ({ data }) => {
    return (
        <div>
            <p>Ennemi PV: {data.pv}</p>
            <p>Ennemi Attaque: {data.attack}</p>
        </div>
    );
};

export default Enemy;
