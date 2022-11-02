import db, { Star, Constellation } from "./server/db/index.js";
import chalk from "chalk";
import csv from "fast-csv";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const seed = async () => {
  try {
    await db.sync({ force: true });
    fs.createReadStream(path.resolve(__dirname, "data", "hygdata_v3.csv"))
      .pipe(
        csv.parse({
          headers: [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            "raDec",
            "properName",
            "distance",
            undefined,
            "radialVelocity",
            "magnitude",
            undefined,
            undefined,
            "colorIndex",
            "coordinates",
            "velocity",
            "positionChange",
            "bayer",
            "flamseed",
            "constellationAbr",
            undefined,
            "lumosity",
            undefined,
            undefined,
          ],
          renameHeaders: true,
        })
      )
      .on("error", (error) => console.error(error))
      .on("data", (row) => Star.create(row))
      .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
    console.log(chalk.bgGreen("Seeded Successfully!"));
  } catch (error) {
    console.error(chalk.bgRed("Something went wrong during db seed"));
    console.error(error);
    db.close();
  }
};

export default seed;

// const Star = db.define("star", {
//   properName: {
//     type: Sequelize.STRING,
//     unique: true,
//   },
//   bayer: {
//     type: Sequelize.STRING,
//   },
//   flamsteed: {
//     type: Sequelize.INTEGER,
//   },
//   constellationAbr: {
//     type: Sequelize.STRING,
//   },
//   distance: {
//     //format with fast-csv to lightyears floored?
//     type: Sequelize.DECIMAL,
//   },
//   magnitude: {
//     type: Sequelize.DECIMAL,
//   },
//   colorIndex: {
//     type: Sequelize.STRING,
//   },
//   lumosity: {
//     type: Sequelize.DECIMAL,
//   },
//   raDec: {
//     type: Sequelize.STRING,
//   },
//   coordinates: {
//     type: Sequelize.STRING,
//   },
//   positionChange: {
//     type: Sequelize.STRING,
//   },
//   velocity: {
//     type: Sequelize.STRING,
//   },
// });
