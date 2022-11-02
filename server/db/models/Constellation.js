import Sequelize from "sequelize";
import db from "../db.js";

const Constellation = db.define("constellation", {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
});

export default Constellation;
