//const { db } = require("./db");
const PORT = process.env.PORT || 3000;
import app from "./server/app.js";

const init = async () => {
  // try {
  // if (process.env.SEED === "true") {
  //   await seed();
  // } else {
  //   await db.sync();
  // }
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  // } catch (ex) {
  //   console.log(ex);
  // }
};

init();
