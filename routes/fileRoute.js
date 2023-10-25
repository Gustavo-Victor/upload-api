import express from "express";
import fileController from "../controllers/fileController.js";
import { upload } from "../config/fileUploadConfig.js";

const router = express.Router();

router.post("/", upload.single("upfile"), fileController.create);
router.get("/", fileController.read);
router.get("/:id", fileController.readById);

export default router; 