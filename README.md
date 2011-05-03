# node-ws-client

A Web Socket client for node.js. This is a convenience wrapper around Peter Griess's node-websocket-client that transparently handles encoding/decoding of websocket data packets as well as heartbeat requests from a websocket server. Specifically, it makes it very easy to talk with a socket.io server. 

## Installation

Install node-websocket-client. 

    npm install websocket-client

Put `lib/ws.js` in your `$NODE_PATH`.

## Usage

    var wsc = require('../lib/ws').ws;
	
	var ws = new wsc('ws://localhost:8000/biff', 'borf');
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
	
## License

(The MIT License)

Copyright (c) 2011 Mike Curtis <michael.curtis@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.