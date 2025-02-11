import { query } from "express";
import express from "express";
import morgan from "morgan"
import {router} from './routes/index.js'
import cors from 'cors'

export const app = express();
const PORT = process.env.PORT;
// nothing
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.use("/api/", router);
app.listen(PORT, function () {
 console.log(`Server is running on port ${PORT}`);
});
/*
app.listen(function () {
    console.log(`Server is running on port ${PORT}`);
   });*/

