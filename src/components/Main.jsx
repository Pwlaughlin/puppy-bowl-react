
 import React, { useState, useEffect } from 'react';
 import PlayerForm from './PlayerForm';
 import Players from './Players';
 import { fetchAllPlayers } from '../api/ajaxHelpers';
 import SinglePlayer from './SinglePlayer';
 
 const Main = () => {
   const [players, setPlayers] = useState([]);
   const [selectedPlayer, setSelectedPlayer] = useState(null);
 
 
   useEffect(() => {
     const getPlayers = async () => { 
       const players = await fetchAllPlayers([]);
       setPlayers(players);
     };
     getPlayers();
   }, []);
 
   const handlePlayerClick = (player) => {
     setSelectedPlayer(player);
   };
 
   return (
   
     <div className="main-container">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/en/a/a7/Puppy_Bowl.png"/>
       <Players players={players} onPlayerClick={handlePlayerClick} />
       {selectedPlayer && <SinglePlayer player={selectedPlayer} />}
       
     </div>
   );
 };
 


 export default Main;