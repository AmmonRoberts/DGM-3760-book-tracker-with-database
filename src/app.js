import express from "express";
import bodyParser from "body-parser";
import router from './routes/bookRoutes.js';
import mongoose from "mongoose";
import {
  config
} from "dotenv";
config()


const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.use('/books', router);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
