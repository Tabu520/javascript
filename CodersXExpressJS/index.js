const express = require("express");
const app = express();
const port = 3000;

var userList = [
  { id: 1, name: "Tai" },
  { id: 2, name: "Quynh" },
];

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Pham The Tai 2",
  });
});

app.get("/users", (req, res) => {
  res.render("users/index", {
    users: userList,
  });
});

app.get("/users/search", (req, res) => {
  var q = req.query.q;
  var matchedUser = userList.filter((user) => {
    if(!user.name || !q) return false;
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render("users/index", {
    users: matchedUser,
    question: q
  });

});

app.get("/users/create", (req, res) => {
  res.render("users/create");
})

app.listen(port, () => console.log(`Example app listening port ${port}`));
