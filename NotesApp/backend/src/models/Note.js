import mongoose from "mongoose";


const notesSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
 }},{timestamps:true})

export const Notes = mongoose.model("Notes",notesSchema)