import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import socket from '../Socket';

const EmployeeComputer = () => {
  
    const [ ticketassigned, setTicketassigned ] = useState('');
    const [ ticketqueue, setTicketqueue ] =useState('')
    const [searchParams] = useSearchParams();
    const computer = (Object.fromEntries([...searchParams]));

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
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Escritorio</h1>
        <h4>Atendiendo a <small>{ ticketassigned ? 'Ticket ' + ticketassigned : '...'}</small></h4>
        <div>{ ticketqueue }</div>
        <input type='submit' value='Atender siguiente ticket'/>
        </form>
        
    </div>
  )
}

export default EmployeeComputer