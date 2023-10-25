import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 
const fileSchema = new Schema({
  originalName: { type: String, required: true },
  newName: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
  src: { type: String, required: true },
}); 

export const File = mongoose.model("File", fileSchema); 

