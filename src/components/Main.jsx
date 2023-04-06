import React, { useEffect } from 'react';
import PlayerForm from './PlayerForm';
import Players from './Players';



const Main = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState({});

    console.log('selectedPlayer: ',setSelectedPlayer);
    
    useEffect(() => {
        const getPlayers = async () => {
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2303-ftb-et-web-ft/players'
            );
            const result = await response.json();
            console.log(result);
          } catch (err) {
            console.error(err);
          }
    };
        getPlayers();
}, []);
return (
    <>
        <div id = 'Main'>
            <div id ='nav-bar'>
                <div id ='Puppy Bowl'>
        <PlayerForm />
        <Players />
        <div id="all-players-container"></div>
        </div>
        </div>
        </div>
    </>
    );
};


export default Main