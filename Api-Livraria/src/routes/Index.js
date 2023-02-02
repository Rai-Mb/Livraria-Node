import express from "express";
import livros from "./LivrosRoutes.js";
import autores from "./AutoresRoutes.js";
import editoras from "./EditoraRoutes.js";
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Livraria Mb'})
    }) 

    app.use(
        express.json(),
        livros,
        autores,
        editoras
    )
}

export default routes