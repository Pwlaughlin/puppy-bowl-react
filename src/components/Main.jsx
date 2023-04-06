import React from 'react';
import PlayerForm from './PlayerForm';
import Players from './Players';

const Main = () => {
    return (  
    <>
        <PlayerForm />
        <Players />
        <div id="all-players-container"></div>
    </>
    );
};



export default Main