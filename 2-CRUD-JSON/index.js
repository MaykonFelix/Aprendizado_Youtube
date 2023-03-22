const express = require("express");
const server = express();
const router = express.Router();
const fs = require("fs"); // File System ***Gerenciar Arquivo

server.use(express.json({ extend: true }));

const readFile = () => {
  const content = fs.readFileSync("./data/items.json", "utf-8");
  return JSON.parse(content);
};

/* Fazer a Leitura do  Arquivo JSON*/
router.get("/", (req, res) => {
  const content = readFile();
  res.send(content);
});

router.post("/", (req, res) => {
  res.send("Bem Vindo");
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
