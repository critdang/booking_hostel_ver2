const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cookieParser = require("cookie-parser");
const cors = require("cors");
const i18n = require("i18n");
const { connectDB } = require("./config/connectDB");
const { sequelize } = require("./config/connectDB");
const initRoutes = require("./route");

const myStore = new SequelizeStore({
  db: sequelize,
});

i18n.configure({
  locales: ["en", "vi"],
  directory: `${__dirname}/locales`,
  cookie: "lang",
});

const app = express();
// use cors
app.use(cors({ origin: true, credentials: true }));

// app.engine('pug', __express)
app.set("view engine", "ejs").set("views", `${__dirname}/views`);

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
app.use(i18n.init);

initRoutes(app);
app.use(express.static(`${__dirname}/public/`));

connectDB();

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("listen at port 8080");
});
