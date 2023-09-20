import express from "express";
import connectData from "./config/MongoDB.js";
import salaDeAulaRouter from "./Routes/RouteSalaDeAula.js";

connectData();
const app = express();

app.use('/api/salaula', salaDeAulaRouter);

const PORT = 5000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));