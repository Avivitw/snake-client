const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");




  conn.on("connect", () => {
    //write my snake name to the server
    conn.write(`Name: viv`);
    //write to the server to move up the snake position
    // setInterval(() =>{
    //   conn.write(`Move: up`);
    //       }, 2000
    // )
    // setTimeout(()=> {
    //   conn.write(`Move: right`);
    // }, 2000)

        // code that print a sucess message to cli when the connection is first established
    console.log('Successfully connected to game server');
  });


  return conn;
};


module.exports = connect;