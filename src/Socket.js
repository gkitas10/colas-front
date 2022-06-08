import io from 'socket.io-client';
const url = process.env.NODE_ENV === 'production' ? 'https://colas-back.herokuapp.com/' : 'http://localhost:4000'

let socket = io(url);

export default socket;