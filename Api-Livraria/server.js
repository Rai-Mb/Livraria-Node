import app from "./src/app.js"

const port = process.env.PORT || 2000 

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})