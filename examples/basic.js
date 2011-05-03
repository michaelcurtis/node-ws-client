var sys = require('sys'),
	wsc = require('../lib/ws').ws;
	
var ws = new wsc('ws://localhost:8001/socket.io/websocket');

ws.on('open', function(sessionId) {
	console.log('Websocket open with session id: '+sessionId);
	ws.send('This is a test message');
});

ws.on('close', function(sessionId) {
	console.log('Websocket closed with session id: '+sessionId);
	process.exit();
});

ws.on('message', function(message) {
	console.log('Got message: '+message);
	ws.close();
});
