import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from '../styles/EmployeeComputer.module.css';
import socket from '../Socket';

const EmployeeComputer = () => {
    const [ ticketassigned, setTicketassigned ] = useState('');
    const [ ticketqueue, setTicketqueue ] =useState('')
    const [searchParams] = useSearchParams();
    const computer = (Object.fromEntries([...searchParams]));
console.log(computer);
    socket.on('ticket-queue', function(data) {
      console.log(data);
      setTicketqueue(data)
    })

    const handleSubmit = e => {
      e.preventDefault();
    socket.emit('assignTicket', computer, function (res) {
        if(res === 'There are no tickets'){
            console.log(res);
            return;
        }
        console.log(res);
        setTicketassigned(res.number)
    });
  }

  useEffect(() => {
    socket.emit('get-queue', 'get-queue', function(data) {
      console.log(data);
      setTicketqueue(data)
    })
  }, [])
  

  return (
    <div className={styles.main}>
      <div className={styles.info_cont}>
        <h1>Escritorio</h1>
        <div>Atendiendo a <small>{ ticketassigned ? 'Ticket ' + ticketassigned : '...'}</small></div>
        <div className={styles.pending_tickets}>Tickets por atender { ticketqueue }</div>
      </div>
      <div className={styles.form_cont}>
        <form onSubmit={handleSubmit}>
          <input type='submit' value='Atender siguiente ticket' className={styles.input_submit}/>
        </form>
      </div>
    </div>
  )
}

export default EmployeeComputer