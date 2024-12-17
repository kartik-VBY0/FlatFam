import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import env from "dotenv";

env.config();
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());

const db=new pg.Client({
    user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();
app.post("/addlisting", async (req, res) => {
    try{  
        await db.query('INSERT INTO "Listings" ("Location","BHK","Furnishing","Rent","Looking For") VALUES ($1,$2,$3,$4,$5)',[req.body.Location , req.body.bhk ,req.body.furnishing,req.body.rent,req.body.lookingfor]);//why not`${item}`
        res.sendStatus(200);
        }catch (err) {
          console.log(err);
        }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);     
});
