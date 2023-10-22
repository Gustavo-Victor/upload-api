import { Picture } from "../models/Picture.js";

async function create(req, res) {
    res.json("OK")
}

async function read(req, res) {
    res.json("OK"); 
}

async function remove(req, res) {
    res.json("OK"); 
}

export default { create, read, remove }; 

