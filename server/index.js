var SocketServer = require('socket.io')
var SignalServer = require('simple-signal-server')


const io = new SocketServer({
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

var ss = SignalServer(io)

var lastId = null
ss.on('discover', function (request) {
  request.discover(lastId)
  lastId = request.initiator.id
})

io.listen(5000)
