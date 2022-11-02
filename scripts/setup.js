import { exec } from "child_process";
import fs from "fs";
import seed from "../seed.js";

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
