const express = require("express");
const routes = require("./controllers/index");
const sequelize = require("./config/connection");
const path = require("path");
const exphbs = require("express-handlebars");

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// This is for accessing public css or javascript files (not used yet)
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use(require('./controllers/'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});
