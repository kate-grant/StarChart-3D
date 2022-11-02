const db = require("./db");
// require models here
const Star = require("./models/Star");
const Constellation = require("./models/Constellation");
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
