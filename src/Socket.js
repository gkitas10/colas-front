import io from 'socket.io-client';
const url = process.env.NODE_ENV === 'production' ? 'https://queues-back.onrender.com/' : 'http://localhost:4000'

let socket = io(url);


export default socket;