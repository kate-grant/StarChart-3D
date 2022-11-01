const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

// Routes & Middleware Here (incl. 404 middleware)
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Middleware to serve up 500 errors for server problems here
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

export default app;
