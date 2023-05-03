import { Router } from "express";
import { addData, getData, updateData } from "../controler/dataControler.js";
const data = Router();
data.get("/getdata", getData);
data.post("/addata", addData);
data.put("/addata/:id", updateData);

export default data;
