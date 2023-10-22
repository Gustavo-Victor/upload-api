import express from "express"; 
import PictureController from "../controllers/pictureControllers.js"; 
import { upload } from "../config/multer.js";


const router = express.Router(); 
router.post("/", upload.single("file"), PictureController.create); 
router.get("/", PictureController.read); 
router.delete("/:id", PictureController.remove);

export default router; 