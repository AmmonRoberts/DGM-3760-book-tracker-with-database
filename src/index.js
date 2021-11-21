require("babel-core/register");
require("babel-polyfill");
import express from "express";
import router from './routes/bookRoutes.js';
import mongoose from "mongoose";
import cors from 'cors'
import {
  config
} from "dotenv";
config()


const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({
      extended: true
    }));
    app.use('/books', router);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
