const { createClient } = require('redis');

// const client = createClient({
//   socket: {
//     host: 6379,
//     port: process.env.PORT_REDIS,
//   },
// });
(async () => {
  const client = createClient({
    url: `rediss://${process.env.REDIS_HOST}@${process.env.REDIS_PORT}`,
  });

  // client.ping((err, pong) => {
  //   console.log(pong);
  // });

  // client.on("error", (error) => {
  //   console.log(error);
  // });

  // client.on("connect", () => {
  //   console.log("[Redis] connected");
  // });

  // client.on("ready", () => {
  //   console.log("[Redis] ready");
  // });
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  // Send and retrieve some values
  await client.set('key', 'node redis');
  const value = await client.get('key');

  console.log("found value: ", value);
  module.exports = client;
})();
