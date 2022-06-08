import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import socket from '../Socket';

const EmployeeComputer = () => {
    const [ ticketassigned, setTicketassigned ] = useState({});
    const [searchParams] = useSearchParams();
    const computer = (Object.fromEntries([...searchParams]));

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

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Escritorio</h1>
        <h4>Atendiendo a <small>{ ticketassigned ? 'Ticket ' + ticketassigned : '...'}</small></h4>

        <input type='submit' value='Atender siguiente ticket'/>
        </form>
        
    </div>
  )
}

export default EmployeeComputer