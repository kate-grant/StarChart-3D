import Sequelize from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/stars",
  {
    logging: false,
    // other options
  }
);

export default db;
