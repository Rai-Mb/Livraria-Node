import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Rai-Mb:Mb.542094@cluster0.vtkjbmh.mongodb.net/Livraria-Mb')

let db = mongoose.connection

export default db

