import React, { useState, useEffect } from 'react';
import styles from '../styles/PublicScreen.module.css';
import socket from '../Socket';
import { useTranslation } from 'react-i18next';

const PublicScreen = () => {
    const { t } = useTranslation()
    const [ status, setStatus ] = useState({
        current:'',
        last4:[]
    })

    socket.on('ticketStatus', function (data) {
        setStatus({
            ...data
        })
        console.log(data);
    });

    useEffect(() => {
        socket.emit('get-status', 'get', function(data) {
            setStatus({
                ...data
            })
        })
      
    }, [])
    
  return (
    <div className={styles.main}>
        <div className={styles.lastticket_cont}>
            <div className={styles.lastticket}>
                <div className={styles.lastticket_number}> Ticket { status.last4.length > 0 ? status.last4[0]?.number : '...'}</div>
                <div className={styles.lastticket_computer}>{ t("publicscreen.counter")} { status.last4.length > 0 ? status.last4[0]?.computer : '...'}</div>
            </div>
        </div>
        <div className={styles.sidecontainer}>
            <div className={styles.secondary_ticket}>
                <div className={styles.secondary_number}> Ticket { status.last4.length > 1 ? status.last4[1]?.number : '...'}</div>
                <div className={styles.secondary_computer}>{ t("publicscreen.counter")} { status.last4.length > 1 ? status.last4[1]?.computer : '...'}</div>
            </div>
            <div className={styles.secondary_ticket}>
                <div className={styles.secondary_number}> Ticket { status.last4.length > 2 ? status.last4[2]?.number : '...'}</div>
                <div className={styles.secondary_computer}>{ t("publicscreen.counter")} { status.last4.length > 2 ? status.last4[2]?.computer : '...'}</div>
            </div>
            <div className={styles.secondary_ticket}>
                <div className={styles.secondary_number}> Ticket { status.last4.length > 3 ? status.last4[3]?.number : '...'}</div>
                <div className={styles.secondary_computer}>{ t("publicscreen.counter")} { status.last4.length > 3 ? status.last4[3]?.computer : '...'}</div>
            </div>
        </div>
    </div>
  )
}

export default PublicScreen