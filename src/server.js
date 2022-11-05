const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectDB } = require("./config/connectDB");
const { sequelize } = require("./config/connectDB");
const initRoutes = require("./route");

const myStore = new SequelizeStore({
  db: sequelize,
});

const app = express();
// use cors
app.use(cors({ origin: true, credentials: true }));

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

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("listen at port 8080");
});
