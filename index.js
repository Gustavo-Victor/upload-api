import express from "express"; 
import { config } from "dotenv"; 
import "./db.js"; 
import PictureRouter from "./routes/picture.js"; 
config(); 

const app = express(); 
const port = process.env.PORT; 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use("/pictures", PictureRouter); 



const listener = app.listen(port || 3000, () => {
    console.log(`App is running on http://localhost:${port}`); 
});

