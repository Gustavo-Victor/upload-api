import { Picture } from "../models/Picture.js";

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

async function remove(req, res) {
    try {
        const { id } = req.params; 
        if(!id) res.status(500).json({error: "Picture ID is required"}); 
        
        const deletedPicture = await Picture.findOneAndDelete({_id: id});
        res.json({deletedPicture, message: "Picture deleted successfully!"}); 
    } catch(error) {
        res.status(500).json({error: `Could not delete image`}); 
    }
}

export default { create, read, remove }; 

