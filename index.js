import express from "express"; 
import { config } from "dotenv"; 
import mongoose from "mongoose"; 
import "./db.js"; 
config(); 

const app = express(); 
const port = process.env.PORT; 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});


const listener = app.listen(port || 3000, () => {
    console.log(`App is running on http://localhost:${port}`); 
});

