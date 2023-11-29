import {useState, useRef} from 'react';
export default function Player() {
  const [enterPlayerName, setEnterPlayerName]=useState('')
  const playerName=useRef(null);

 
  function handleClick(){
    setEnterPlayerName(playerName.current.value)
    playerName.current.value='';
  }
  
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName? enterPlayerName:'unknown entity'}</h2>
      <p>
        <input 
            type="text"
            ref={playerName} 
     
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
