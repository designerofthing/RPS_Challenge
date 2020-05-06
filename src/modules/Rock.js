import React, { useState } from 'react';
import rock from '../images/rock.png';


function Rock(params) {

  const [userWeapon, setUserWeapon] = useState('')

  function handleClick() {
    setUserWeapon('rock')
  }
    return (
      <>
    <img  src={rock} alt='rock'/>
    
    </>
    );
}

export default Rock;
