const express = require("express");
const { createServer } = require("node:http");

const { Server } = require("socket.io");
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (message) => {
    console.log(message, socket.id);
    io.emit("message", message);

    // socket.on("disconnect", () => {
    //   console.log(`Socket ${socket.id} disconnected.`);
    // });
  });
});

server.listen(3008, () => {
  console.log(`Example app listening on port`);
});
//////////////////////////////////////

// const express = require("express");
// const { createServer } = require("node:http");
// const { Server } = require("socket.io");

// const app = express();
// const server = createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected:", socket.id);
//   socket.on("message", (message, roomName) => {
//     console.log(message, roomName, socket.id);
//     io.emit("message", message);
//   });
// });

// server.listen(5000, () => {
//   console.log("server running at http://localhost:5000");
// });
