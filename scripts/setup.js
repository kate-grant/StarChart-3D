const { exec } = require("child_process");
const fs = require("fs");
const chalk = require("chalk");
const seed = require("../seed");

if (!fs.existsSync("../data/hygdata_v3.csv")) {
  exec("gunzip ../data/hygdata_v3.csv.gz", (err) => {
    if (err) {
      return;
    }
    console.log("Completed unzip");
  });
}

seed();

console.log;
