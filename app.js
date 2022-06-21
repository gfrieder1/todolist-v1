//jshint exversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Server Setup

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.listen(port, function(req, res) {
  console.log("Server started on port " + port);
});

// Global Variables

var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

// '/'

app.get("/", function(req, res) {
  const title = "Tasks";

  res.render("list", {
    listTitle: title,
    listItems: items,
    route: "/",
  });
});

app.post("/", function(req, res) {
  const item = req.body.newTask;
  items.push(item);

  // console.log(item);

  res.redirect("/");
});

// '/work'

app.get("/work", function(req, res) {
  const title = "Work List";

  res.render("list", {
    listTitle: title,
    listItems: workItems,
    route: "/work",
  });
});

app.post("/work", function(req, res) {
  const item = req.body.newTask;
  workItems.push(item);

  // console.log(item);

  res.redirect("/work");
});
