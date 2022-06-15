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
    <div className={styles.main}>
        <div className={styles.cont}>
            <span className={styles.ticket}>
                Ticket{ newticket ? ' '+newticket : '...' }
            </span>
            <button className={styles.btn} onClick={handleClick}>
                Generar nuevo ticket
            </button>
        </div>
        
    </div>
  )
}

export default NewTicket;

