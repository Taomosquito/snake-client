const { IP, PORT } = require("./constants");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const serverConnection = net.createConnection({
    host: IP, // IP address between host: and  //,
    port: PORT// PORT number between port: and //,
  });

  // interpret incoming data as text
  serverConnection.setEncoding("utf8");

  //This is what a listener looks like when it is lisening for an on connection event.
  serverConnection.on("connect", () => {
    console.log("connection to game server has been established")
    serverConnection.write("Name: SDP");

    // // const autoMoveUp = function () {
    // //   serverConnection.write("Move: up")
    // // }
    // // setInterval(autoMoveUp, 50);

  });

  serverConnection.on("data", (data) => {
    console.log(data);
  });
  return serverConnection;
};

module.exports = connect;

