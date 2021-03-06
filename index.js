// Express boilerplate
const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");

// Application concerns
const Burger = require("./models/Burger");
const burgersRouter = require("./routers/burgers");

// Mount burgrersRouter router middleware
app.use("/api", burgersRouter);

// Render hbs template
app.get("/", (req, res) => {
  Burger.findAll().then(burgers => {
    res.render("index", { burgers });
  });
});

app.listen(3000);
