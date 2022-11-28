require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./config/connectDB");
const { sequelize } = require("./config/connectDB");
const initRoutes = require("./route");
const viewEngine = require("./config/configViewEngine");
const corsOptions = require("./config/corsOptions");
const credentials = require("./utils/middleware/credentials");
require('./config/connectRedis'); // auto connect redis

const myStore = new SequelizeStore({
  db: sequelize,
});

const app = express();
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// app.use(cors({ origin: true, credentials: true }));
app.use(cors(corsOptions));

// view engine
viewEngine(app);

// allow read json and xxx.urlencoded
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(
  session({
    secret: "sssss",
    store: myStore,
    resave: false, // evey request to the server, the session will be refreshed
    saveUninitialized: true, // do not modified the session
  }),
);
myStore.sync();

app.use(cookieParser());

initRoutes(app);

connectDB();
app.use("*", (req, res) => {
  const err = Error(`Requested path ${req.path} not found`);
  res.status(404).send({
    success: false,
    message: `Requested path ${req.path} not found`,
    stack: err.stack,
  });
});

app.listen(process.env.PORT_BE, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`🚀 Server is listening at port ${process.env.PORT_BE}`);
});
