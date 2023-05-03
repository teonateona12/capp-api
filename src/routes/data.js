import { Router } from "express";
import { getData } from "../controler/dataControler.js";
const data = Router();
data.get("/getdata", getData);

export default data;
