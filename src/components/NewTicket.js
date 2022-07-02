import React, { useState } from 'react';
import styles from '../styles/NewTicket.module.css';
import socket from '../Socket';
import { useTranslation } from 'react-i18next';

const NewTicket = () => {
    const { t } = useTranslation()
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
                {t("newticket.generate")}
            </button>
        </div>
        
    </div>
  )
}

export default NewTicket;

