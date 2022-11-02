const Sequelize = require("sequelize");
const db = require("../db");

const Constellation = db.define("constellation", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Constellation;
