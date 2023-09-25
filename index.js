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

const port =process.env.PORT
httpServer.listen(port?port:3500,()=> console.log(`listen on port ${port?port:3500}`))
