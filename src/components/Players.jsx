import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import PlayerForm from './PlayerForm';
import SinglePlayer from './SinglePlayer';

const Players = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <>
      <div id="all-players-container">
        <PlayerForm />
        <div className="players-container">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} onPlayerClick={handlePlayerClick} />
          ))}
        </div>
        
      </div>
      {selectedPlayer && <SinglePlayer player={selectedPlayer} />}
    </>
  );
};

export default Players;
