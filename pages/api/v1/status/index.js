function status(request, response) {
  response
    .status(200)
    .json({ chave: "Construção de um ambiente de finanças e tecnologia" });
}

export default status;
