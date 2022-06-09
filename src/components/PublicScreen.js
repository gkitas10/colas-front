import React, { useState, useEffect } from 'react';
import '../styles/PublicScreen.css';
import socket from '../Socket';

const PublicScreen = () => {
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
    <div className='public-screen'>
        <div className="main-cont">
            <div className="current-ticket">
                <div className="computer"></div>
                <div className="ticket-number">{ status.last4.length > 0 ? status.last4[0]?.number : null}</div>
            </div>
        </div>
        <div className="side-cont">
            <div className="next-ticket">
                <div className="computer"></div>
                <div className="ticket-number">{ status.last4.length > 0 ? status.last4[1]?.number : null}</div>
            </div>
            <div className="next-ticket">
                <div className="computer"></div>
                <div className="ticket-number">{ status.last4.length > 0 ? status.last4[2]?.number : null}</div>
            </div>
            <div className="next-ticket">
                <div className="computer"></div>
                <div className="ticket-number">{ status.last4.length > 0 ? status.last4[3]?.number : null}</div>
            </div>
        </div>
    </div>
  )
}

export default PublicScreen