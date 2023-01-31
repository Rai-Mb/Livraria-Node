const http = require('http') /*Nessa linha estou o usando o "require('http') para dizer que eu quero usar o metodo nativo HTTP" */
const port = 4000 /*Nessa linha estou dizendo a porta que eu quero acessar meu metodo HTTP*/ 

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre projeto'
}

             /*criar o servidor/REQ->requisição RES->resposta*/
const server = http.createServer((req, res ) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})/*Nessa linha estou definindo o que eu quero devolver como resposta quando chamar o servidor*/
    res.end(rotas[req.url])/*A resposta que ele vai me retornar quando eu chamar o metodo*/
})
     /*dizer a porta que ele vai escutar*/
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})