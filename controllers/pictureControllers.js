import { Picture } from "../models/Picture.js";
import fs from "node:fs"; 

async function create(req, res) {
    try {
        const { name } = req.body; 
        const file = req.file; 
        const uploadedPicture = new Picture({
            name, 
            src: file.path 
        }); 

        const result = await uploadedPicture.save(); 
        console.log(result); 
        res.json({
            uploadedPicture,
            message: "Image uploaded succesfully!" 
        }); 

    } catch (error) {
        res.status(500).json({error: `Error when saving image: ${error}`}); 
    }
}

async function read(req, res) {
    try {
        const pictures = await Picture.find({}); 
        res.json({pictures}); 
    } catch (error) {
        res.status(500).json({error: `Could not find data: ${error}`}); 
    }
}

async function readById(req, res) {
    try {
        const { id } = req.params;
        const picture = await Picture.findOne({_id: id});
        if(!picture) res.status(404).json({error: "Could not find picture"}); 
        
        res.json({picture}); 
    } catch (error) {
        res.status(500).json({error: `Could not find data: ${error}`}); 
    }
}

async function remove(req, res) {
    try { 
        const { id } = req.params; 
        const picture = await Picture.findOne({_id: id.toString()}); 
        if(!picture) res.status(404).json({error: "Could not find picture"}); 
        
        fs.unlinkSync(picture.src); 
        const result = await Picture.findOneAndDelete({_id: id}); 

        res.json({result, message: "Picture deleted successfully!"}); 
    } catch(error) {
        res.status(500).json({error: `Could not delete picture`}); 
    }
}

export default { create, read, readById, remove }; 

