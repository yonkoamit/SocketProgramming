const net = require("net");

// For setting up an TCP connection

const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log("Received data from client", clientData.toString());
  });

  socket.write("Hello from server");
});

// bind the server and start listening
// we need to state the IP explicitly as it is by default handled by net module of node
server.listen(3000, () => {
  console.log("Server Started listening");
});
