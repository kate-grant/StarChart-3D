import zlib from "zlib";
import fs from "fs";
import seed from "../seed.js";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const zipped = path.resolve(__dirname, "../data", "hygdata_v3.csv.gz");
const unzipped = path.resolve(__dirname, "../data", "hygdata_v3.csv");
console.log("zipped", zipped);
console.log("1");

const unzip = zlib.createUnzip();

const setup = () => {
  if (!fs.existsSync(unzipped)) {
    const input = fs.createReadStream(`${zipped}`);
    const output = fs.createWriteStream(`${unzipped}`);
    input.pipe(unzip).pipe(output);
  }
  console.log("6");

  seed();
};
setup();
console.log;
