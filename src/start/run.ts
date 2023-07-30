import { Application } from "express";
import config from "../../config/config";

const run = async (app: Application) => {

  app.listen(config.PORT, () => {
    console.log(`Server running on port : ${config.PORT}`);
  });
};

export default run;
