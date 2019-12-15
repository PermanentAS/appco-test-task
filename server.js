const express = require("express");
const app = express();
const port = 8000;
const GetData = require("./GetData")


app.get("/users", (request, response) => {
  let page = parseInt(request.query.page);
  let usersPerPage = parseInt(request.query.usersPerPage);
  
  response.send(GetData.getUsers(page, usersPerPage));
});

app.get("/user", (request, response) => {
  let id = parseInt(request.query.id);
  let fromDate = request.query.fromDate;
  let toDate = request.query.toDate;

  response.send(GetData.getUserStats(id, fromDate, toDate));
});

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
