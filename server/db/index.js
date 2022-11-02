import db from "./db.js";
// require models here
import Star from "./models/Star.js";
import Constellation from "./models/Constellation.js";
// define associations here
Star.belongsToMany(Constellation, { through: "constellations_stars" });
Constellation.belongsToMany(Star, { through: "constellations_stars" });

export { Star, Constellation };
export default db;
