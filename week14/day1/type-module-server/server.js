import express from "express";
import cors from "cors";
import router from "./routes/test.router.js";
import path from "path";
import products_router from "./routes/products.router.js";

const app = express();
app.use(cors());

const __dirname = path.resolve();
// console.log(__dirname);
app.use("/", express.static(__dirname + "/public"));

app.listen(3001);

// app.use(router);
app.use(products_router);
