import React, { useState } from 'react';
import styles from '../styles/NewTicket.module.css';
import socket from '../Socket';

const NewTicket = () => {
    const [ newticket, setNewticket ] = useState('');
    console.log(newticket);

    const handleClick = () => {
        socket.emit('nextTicket', null, function(nextTicket){
            setNewticket(nextTicket)        
        })
    }
  return (
    <div>
        <span>
            Ticket { newticket }
        </span>
        <button className={styles.btn} onClick={handleClick}>
            Generar nuevo ticket
        </button>
    </div>
  )
}

export default NewTicket;

