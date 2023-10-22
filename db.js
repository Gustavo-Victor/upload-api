import mongoose from "mongoose";
import { config } from "dotenv";
config(); 

const { DB_URI } = process.env; 

mongoose.set("strictQuery", true); 

export async function main() {
    await mongoose.connect(`${DB_URI}`);   
    console.log(`Connected succesfully!`);   
}

main().catch((err) => console.log(err)); 

