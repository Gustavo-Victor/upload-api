import multer from "multer"; 
import path from "node:path"; 

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "uploads/");
    }, 
    filename: function(req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname));
    }, 
}); 

export const upload = multer({ storage });  

