import express from "express";
import connectData from "./config/MongoDB.js";

connectData();
const app = express();

const PORT = 5000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));