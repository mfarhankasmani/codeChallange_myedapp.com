const users = require("../jsons/users.json");
const questPathways = require("../jsons/questPathways.json")
module.exports = app => {
  app.get("/users", (req, res) => {
    res.send(users);
  });
  app.get("/questpathways", (req, res) => {
    res.send(questPathways);
  });
};