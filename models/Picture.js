import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 
const pictureSchema = new Schema({
    name: { type: String, required: true, uniqure: true },
    src: { type: String, required: true }
});

export const Picture = mongoose.model("Picture", pictureSchema); 


