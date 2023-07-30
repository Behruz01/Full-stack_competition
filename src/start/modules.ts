import express, { Application } from "express";
import { errorHandler } from "../api/middlewares/error-handler";

const modules = async (app: Application) => {
  app.use(express.json());

//   routes
  app.use(errorHandler)
};

export default modules;
