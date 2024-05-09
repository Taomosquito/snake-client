const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address between host: and  //,
    port: 50541// PORT number between port: and //,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //This is what a listener looks like when it is lisening for an on connection event.
  conn.on("connect", () => {
    // code that does something when the connection is first established
  });

  //This is what a listener looks like when it is lisening for an on connection event.
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

// // // // standard version of .on event.
// // // conn.on("event name", functionThatDoesSomething);
// // // 
// // // // Unnamed version of code for the .on event
// // // conn.on("event name", () => {
// // //   // code that does something
// // // });
// // // 
// // // 
