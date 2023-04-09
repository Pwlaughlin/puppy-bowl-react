import React from 'react';

const SinglePlayer = (props) => {
  const player = props.player;

  return (
    <div className="selected-player-card">
      <img src={player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p>{player.breed}</p>
      <p>{player.status}</p>
      <p>{player.id}</p>
    </div>
  );
};

export default SinglePlayer;