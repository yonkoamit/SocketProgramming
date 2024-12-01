This implements the TCP connection between a client and server.

To establish a connection between an client and server a TCP connection is required.

For establishing a TCP connection, a 3 way handshake is needed.
For that server needs to create a socket object and bind that to the IP and the host.(Ip+ host -> IP- Think of address of house,host- whom the package is for)

The client then needs to create a socket object and connect to the corresponding socket object of the server.
Here client doesn't need to bind to a port specifically as it just connect.
If some other things like browser need to connect to client, then it needs to bind to a port

In HTTP these all things are hidden as they it internally handles the same things.

HTTP - Application layer protocol (e,g - Browsers connect using this)
A tranfer protocol to transfer hyper texts - which contains hyperlinks.
TCP - Transport layer protocol
