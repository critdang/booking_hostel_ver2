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
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// view engine
viewEngine(app);

// allow read json and xxx.urlencoded
app.use(bodyParser.json({ }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "sssss",
    store: myStore,
    resave: false, // evey request to the server, the session will be refreshed
    saveUninitialized: true, // do not modified the session
    // cookie: {
    //   maxAge: 1000 * 60 * 60,
    //   sameSite: "none",
    //   // httpOnly: false,
    //   secure: true,
    // },
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
