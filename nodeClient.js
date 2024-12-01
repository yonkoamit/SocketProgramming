const net = require("net");
// For setting up an TCP connection

// connect to the corresponding server socket
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Client connected");
  client.write("Hello from client");
});

client.on("data", (serverData) => {
  console.log("Received data from clien", serverData.toString());
});
