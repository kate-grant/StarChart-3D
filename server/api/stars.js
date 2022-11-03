import express from "express";
import { Star, Constellation } from "../db/index.js";
import Sequelize from "sequelize";

const starRouter = express.Router();

starRouter.get("/", async (req, res, next) => {
  try {
    const data = await Star.findAll({
      order: [["magnitude", "ASC"]],
      limit: 1000,
    });
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

export default starRouter;
