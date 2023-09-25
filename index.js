// Import the 'ws' library
import {createServer} from "http"
import {Server} from "socket.io"


// Create a WebSocket server
const httpServer = createServer()
const io = new Server(httpServer,{
  cors:{
    origin:"*"
  }
})
io.on('connection', socket => {

  socket.on('message', data => {
    console.log(`Received: ${data}`);

    io.emit('message',` ${data}`);
  });


});


httpServer.listen(3500,()=> console.log(`listen on port 3500`))
