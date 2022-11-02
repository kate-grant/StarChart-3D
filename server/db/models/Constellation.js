import Sequelize from "sequelize";
import db from "../db";

const Constellation = db.define("constellation", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Constellation;
