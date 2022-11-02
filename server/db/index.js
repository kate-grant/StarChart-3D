import db from "./db";
// require models here
import Star from "./models/Star";
import Constellation from "./models/Constellation";
// define associations here
Star.belongsToMany(Constellation, { through: "constellations_stars" });
Constellation.belongsToMany(Star, { through: "constellations_stars" });

module.exports = {
  // Include your models in this exports object as well!
  db,
  // models
  models: {
    Star,
    Constellation,
  },
};
