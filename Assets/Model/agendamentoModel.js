import conexao from "../Config/database.js";

export async function agendamentos() {
    const [rows] = await conexao.query(
        "SELECT * FROM agendamentos"
    );

    return rows;
}

export async function salvarAgendamento(dados) {
    const sql = `
        INSERT INTO agendamentos (
            nome,
            procedimento,
            dia,
            hora
        )
        VALUES (?, ?, ?, ?)
    `;

    const valores = [
        dados.nome,
        dados.procedimento,
        dados.dia,
        dados.hora
    ];

    const [resultado] = await conexao.query(sql, valores);

    return resultado;
}
