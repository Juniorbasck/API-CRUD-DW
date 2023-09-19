import express, { Router } from "express";

dotenv.config();
connectDatabase();
const app = express();

app.use(bodyParser.json())

//API     

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));