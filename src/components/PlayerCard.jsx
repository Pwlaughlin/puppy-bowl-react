

import React from 'react';

const PlayerCard = ({ player, onPlayerClick }) => {
  const handlePlayerClick = () => {
    console.log('Player clicked:', player);  
    onPlayerClick(player);    
  };
  
  return (
    <div className="single-player-card" key={player.id}>
      <img src={player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p>{player.breed}</p>
      <button  onClick={handlePlayerClick}>Details</button>
   
    </div>
  );
};

export default PlayerCard;

 