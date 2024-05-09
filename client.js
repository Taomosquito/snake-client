const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const serverConnection = net.createConnection({
    host: "165.227.47.243", // IP address between host: and  //,
    port: 50541// PORT number between port: and //,
  });

  // interpret incoming data as text
  serverConnection.setEncoding("utf8");

  //This is what a listener looks like when it is lisening for an on connection event.
  serverConnection.on("connect", () => {
    console.log("connection to game server has been established")
    serverConnection.write("Name: SDP");
  });



  // // standard version of .on event.
  //conn.on("connect", functionThatDoesSomething);

  // conn.on("connect", (client) => {
  //   console.log(client);
  //   
  // });

  //This is what a listener looks like when it is lisening for an on connection event.
  serverConnection.on("data", (data) => {
    console.log(data);
  });
  return serverConnection;
};

module.exports = connect;

