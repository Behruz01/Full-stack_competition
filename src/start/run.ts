import { Application } from "express";
import { connect } from "mongoose";
import config from "../../config/config";

const run = async (app: Application) => {
  if (!config.ConnectionString) {
    throw new Error("ConnectionString is not defined in the config");
  }
  
  await connect(config.ConnectionString);
  app.listen(config.PORT, () => {
    console.log(`Server running on port : ${config.PORT}`);
  });
};

export default run;
