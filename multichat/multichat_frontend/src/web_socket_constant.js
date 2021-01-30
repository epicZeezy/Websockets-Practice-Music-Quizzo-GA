import ReconnectingWebSocket from 'reconnecting-websocket';

let ws = new ReconnectingWebSocket('ws://localhost:8000/chat/stream/');

export default ws