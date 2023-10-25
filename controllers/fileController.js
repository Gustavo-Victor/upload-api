import { File } from "../models/File.js";

async function create(req, res) {

    const file = req.file;

    if (!file) res.status(500).json({ error: "File is required" });

    try {
        const uploadedFile = new File({
            originalName: file.originalname,
            newName: file.filename,
            type: file.mimetype,
            size: parseInt(file.size),
            src: file.path
        });

        const result = await uploadedFile.save();
        console.log(result);

        res.status(201).json({
            name: file.originalname,
            type: file.mimetype,
            size: parseInt(file.size),
        });

    } catch (err) {
        console.log(`Failed to upload file: ${err}`);
        res.status(500).json({ error: `Failed to upload file: ${err}` });
    }
}

async function read(req, res) {
    try {
        const files = await File.find({});
        res.json(files);
    } catch (err) {
        console.log(`Could not find data: ${err}`);
        res.json({ error: `Could not find data: ${err}` });
    }
}

async function readById(req, res) {
    const { id } = req.params;
    if (!id) res.status(500).json({ error: "Id is required" });

    try {
        const file = await File.findOne({ _id: id });
        if (!file) res.status(404).json({ error: "File not found" });
        res.json(file);

    } catch (err) {
        console.log(`Could not find file: ${err}`);
        res.json({ error: `Could not find file: ${err}` });
    }
}

export default { create, read, readById };

