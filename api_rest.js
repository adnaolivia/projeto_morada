import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
let memorias = []; // temporario

app.post("/memorias", (request, response) => {
    const novaMemoria = request.body;
    memorias.push(novaMemoria);
    console.log("memoria recebida:", novaMemoria);
    console.log("memorias atuais:", memorias);
    response.status(201).json({
        message: "Memória criada com sucesso!",
        dados: novaMemoria
     });
});

// const objectResponse = {
//     nome: "John",
//     sobrenome: "Doe",
// };

app.get("/memorias", (request, response) => {
    response.json(memorias);
});

app.listen(PORT, () =>{
    console.log(`servidor rodando na porta ${PORT}`);
})