import React from 'react';

const PlayerForm = () => {
    return (
    <div id='new-player-form'>
      <form>
        <header>
        <label HTMLfor='name'>Name:</label>
        <input type='text' name='name' />
        <label  for='breed'>Breed:</label>
        <input type='text' name='breed' />
        <button type='submit'>Submit</button>
        </header>
        </form>
        </div>
    );
};


export default PlayerForm;

