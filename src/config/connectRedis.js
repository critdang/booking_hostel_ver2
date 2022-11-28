const { createClient } = require('redis');

const client = createClient({
  socket: {
    host: 6379,
    port: process.env.PORT_REDIS,
  },
});

client.ping((err, pong) => {
  console.log(pong);
});

client.on("error", (error) => {
  console.log(error);
});

client.on("connect", () => {
  console.log("[Redis] connected");
});

client.on("ready", () => {
  console.log("[Redis] ready");
});

module.exports = client;
