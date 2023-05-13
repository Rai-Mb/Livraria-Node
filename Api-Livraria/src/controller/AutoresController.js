import autores from "../models/AutorModel.js";

class AutoresController {

    static listarAutores = async(req, res) => {
        try {
            const response = await autores.find()
            if (Array.isArray(response) && response.length == 0 ) {
                res.status(404).json({message: "Nenhum autor cadastrado"})
            }
            res.status(200).json(response)
        } catch (error) {
            res.status(500).send({ message: `${err.message} - falha ao listar autores.` })
        }
    }

    static listarAutorPorId = async (req, res) => {
        try {
        const id = req.params.id
        const response = await autores.findById(id)
        if (!response ) {
            res.status(404).json({message: `autor com Id:${id} não cadastrado`})
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ message: `${error.message} - falha ao listar autor.` })
    }
        
    }

    static cadastrarAutor = async (req, res) => {
        try {
            let autor = new autores(req.body)
            const response = await autor.save(autor)
                if (autores) {
                    res.status(201).send(autor.toJSON())
                } 
        } catch (error) {
            res.status(500).send({ message: `${error.message} - falha ao cadastrar autor.` })
        }
        
    }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id
            const response = await autores.findByIdAndUpdate(id, req.body)
            res.status(200).send({ message: 'Autor atualizado com sucesso.' })
        } catch (error) {
            res.status(500).send({  message: `Autor não encontrado.` })
        }
        }

    static deletarAutor = async (req, res) => {
        try {
            const id = req.params.id
            const response = await autores.findByIdAndDelete(id)
            console.log(response)
            res.status(200).send({ message: `Autor removido com sucesso.` })
            console.log(response)
        } catch (error) {
                res.status(500).send({ message: `${error.message} - Falha ao deletar autor.` })
        }
        
    }
}

export default AutoresController