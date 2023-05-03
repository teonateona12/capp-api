import { Router } from "express";
import {
  addData,
  deleteData,
  getData,
  updateData,
} from "../controler/dataControler.js";
const data = Router();
data.get("/getdata", getData);
data.post("/addata", addData);
data.put("/addata/:id", updateData);
data.delete("/addata/:id", deleteData);

export default data;
