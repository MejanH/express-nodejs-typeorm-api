import * as express from "express";
import routes from "./routes";
import { createConnection } from "typeorm";

createConnection()
  .then((connection) => {
    const app = express();
    app.use(express.json());

    app.use("/", routes);
    // start express server
    app.listen(5000, () => {
      console.log("Server is running on http://localhost:5000/");
    });
  })
  .catch((error) => console.log(error));
