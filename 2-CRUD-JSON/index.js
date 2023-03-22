const express = require("express");
const server = express();
const router = express.Router();
const fs = require("fs"); // File System ***Gerenciar Arquivo
server.use(express.json({ extend: true }));

// Função para converter o JSON para Object
const readFile = () => {
  const content = fs.readFileSync("./data/items.json", "utf-8"); //Função para pegar o JSON
  return JSON.parse(content);
};

// Fazer a Leitura do  Arquivo JSON
router.get("/", (req, res) => {
  const content = readFile();
  res.send(content);
});

router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  const correntContent = readFile();
  correntContent.push({ name, email, phone });
  res.send(correntContent);
  
});

router.put("/", (req, res) => {
  res.send("Bem Vindo");
});

router.delete("/", (req, res) => {
  res.send("Bem Vindo");
});

server.use(router);

server.listen(3000, () => {
  console.log("Servidor ON");
});
