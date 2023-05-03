import { Router } from "express";
import { addData, getData } from "../controler/dataControler.js";
const data = Router();
data.get("/getdata", getData);
data.post("/addata", addData);

export default data;
