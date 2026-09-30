import express from "express";

import agendamentoRoute from "./Assets/rOUTES/agendamentoRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/agendamento", agendamentoRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});