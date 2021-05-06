const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");




  conn.on("connect", () => {
    //write my snake name to the server
    conn.write(`Name: viv`);
    // code that print a sucess message to cli when the connection is first established
    console.log('Successfully connected to game server');
  });


  return conn;
};


module.exports = connect;