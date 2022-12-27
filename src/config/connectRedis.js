// const { createClient } = require('redis');

// const client = createClient({
//   // socket: {
//   //   host: 6379,
//   //   port: process.env.PORT_REDIS,
//   // },
//   url: `rediss://${process.env.REDIS_HOST}@${process.env.REDIS_PORT}`,
// });
// client.on("connect", () => {
//   console.log("[Redis] connected");
// });
// client.on("ready", () => {
//   console.log("[Redis] ready");
// });
// client.set('key', 'node redis');
// const value = client.get('key');

// console.log("found value: ", value);
// module.exports = client;

// (async () => {
//   const client = createClient({
//     url: `rediss://${process.env.REDIS_HOST}@${process.env.REDIS_PORT}`,
//   });

//   client.on("connect", () => {
//     console.log("[Redis] connected");
//   });

//   client.on("ready", () => {
//     console.log("[Redis] ready");
//   });
//   client.on('error', (err) => console.log('Redis Client Error', err));
//   // Send and retrieve some values
//   await client.set('key', 'node redis');
//   const value = await client.get('key');

//   console.log("found value: ", value);

//   await client.connect();

//   module.exports = client;
// })();
