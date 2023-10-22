import express from "express"; 
import PictureController from "../controllers/pictureControllers.js"; 

const router = express.Router(); 
router.post("/", PictureController.read); 

export default router; 