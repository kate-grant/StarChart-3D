const { db } = require("./server/db");
const { Star, Constellation } = require("./server/db/models");
const chalk = require("chalk");
const csv = require("fast-csv");
const fs = require("fs");
const path = require("path");

const seed = async () => {
  try {
    await db.sync({ force: true });
    fs.createReadStream(path.resolve(__dirname, "data", "hygdata_v3.csv"))
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => console.log(row))
      .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
    console.log(chalk.bgGreen("Seeded Successfully!"));
  } catch (error) {
    console.error(chalk.bgRed("Something went wrong during db seed"));
    console.error(error);
    db.close();
  }
};

module.exports = seed;
