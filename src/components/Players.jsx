import React from 'react';
import PlayerCard from './PlayerCard';


const Players = () => {
    return (  
    <>
            <label for='search'>Search Players</label>
            <input type='text' name='Search' />
            <button type='submit'>Search</button>
        <div id="all-players-container">
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/> 
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/> 
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/> 
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/>
        <PlayerCard/> 
        </div>
    </>
    );
};



export default Players