import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        telefone: {type: Number, required: true},
        endereco: {type: String}
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model('editoras', editoraSchema)

export default editoras