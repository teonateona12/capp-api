import express from "express";
import cors from "cors";
import data from "./src/routes/data.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", data);

app.listen(3001);
