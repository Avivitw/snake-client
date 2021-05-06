const { COMMANDS } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


  
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  console.log('key', key);
  
  if (COMMANDS[key]) {
    console.log('COMMANDS[key]', COMMANDS[key]);
    connection.write(COMMANDS[key]);
  }
};


module.exports = setupInput;