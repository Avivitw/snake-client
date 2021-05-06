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

const commands = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right',
  'p': `Say: I'm great`,
  'o': `Say: What's uuuuuppppp?`,
  
};
  
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  console.log('key', key);
  
  if (commands[key]) {
    console.log('commands[key]', commands[key]);
    connection.write(commands[key]);
  }
};


module.exports = setupInput;