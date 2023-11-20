import React, { useState, useEffect } from 'react';
import Joueurs from './Joueurs';
import Room from './Room';

const Game = () => {
    const [player, setPlayer] = useState({ pv: 100, attack: 10 });
    const [room, setRoom] = useState({});
    const [stats, setStats] = useState({ enemiesDefeated: 0, bossesDefeated: 0 });
    const [roomsCleared, setRoomsCleared] = useState(0);

    useEffect(() => {
        generateRoom();
    }, []);

    const generateRoom = () => {
        const roomTypes = ['enemy', 'boss', 'heal', 'upgrade'];
        const type = roomTypes[Math.floor(Math.random() * roomTypes.length)];

        let newRoom = { type };
        switch (type) {
            case 'enemy':
                newRoom.enemy = {
                    pv: 20,
                    attack: 5,
                };
                break;
            case 'boss':
                newRoom.enemy = {
                    pv: 70,
                    attack: 30,
                };
                break;
            default:
                break;
        }

        setRoom(newRoom);
    };

    const handleCombat = () => {
        if (room.type === 'enemy' || room.type === 'boss') {
            let enemyPv = room.enemy.pv - player.attack;
            if (enemyPv < 1) {
                // Le joueur a vaincu l'ennemi
                const updatedStats = room.type === 'boss'
                    ? { ...stats, bossesDefeated: stats.bossesDefeated + 1 }
                    : { ...stats, enemiesDefeated: stats.enemiesDefeated + 1 };

                setStats(updatedStats);
                generateRoom(); // Générer la salle suivante
                setRoomsCleared(prevCount => prevCount + 1);
            } else {
                // L'ennemi riposte
                let playerPv = player.pv - room.enemy.attack;
                if (playerPv <= 0) {
                    // Le joueur est vaincu
                    alert('Vous avez été vaincu !');
                    generateRoom();
                    setRoomsCleared(0);
                    setStats({ enemiesDefeated: 0, bossesDefeated: 0 });
                    setPlayer({ pv: 100, attack: 30 })
                } else {
                    // Mise à jour des PV du joueur et de l'ennemi
                    setPlayer({ ...player, pv: playerPv });
                    setRoom({ ...room, enemy: { ...room.enemy, pv: enemyPv } });
                }
            }
        }
    };

    const handleHeal = () => {
        const healAmount = Math.min(player.pv * 0.15, 100 - player.pv);
        setPlayer(prevPlayer => ({
            ...prevPlayer,
            pv: prevPlayer.pv + healAmount
        }));
        generateRoom();
        setRoomsCleared(prevCount => prevCount + 1);
    };

    const handleUpgrade = () => {
        const upgrade = 10;
        setPlayer(prevPlayer => ({
            ...prevPlayer,
            attack: Math.min(prevPlayer.attack + upgrade, 50) // Limite l'attaque à 50 maximum
        }));
        generateRoom();
        setRoomsCleared(prevCount => prevCount + 1);
    };

    return (
        <div>
            <Joueurs data={player} />
            {room && <Room data={room} onCombat={handleCombat} onHeal={handleHeal} onUpgrade={handleUpgrade} />}
            <p>Ennemis vaincus : {stats.enemiesDefeated}</p>
            <p>Boss vaincus : {stats.bossesDefeated}</p>
            <p>Salles traversées : {roomsCleared}</p>
        </div>
    );
};

export default Game;
