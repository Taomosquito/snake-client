let serverConnection
const setupInput = function (connection) {
  const stdin = process.stdin;
  serverConnection = connection;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    //const autoMoveUp = function () {
    serverConnection.write("Move: up");
  }
  // setInterval(autoMoveUp, 50);
  // }
  if (key === "s") {
    // const autoMoveDown = function () {
    serverConnection.write("Move: down");
  }
  //setInterval(autoMoveDown, 50);
  // }
  if (key === "a") {
    // const autoMoveLeft = function () {
    serverConnection.write("Move: left");
  }
  // setInterval(autoMoveLeft, 50);
  // }
  if (key === "d") {
    //const autoMoveRight = function () {
    serverConnection.write("Move: right");
  }
  // setInterval(autoMoveRight, 50);
  // }
};

module.exports = setupInput;