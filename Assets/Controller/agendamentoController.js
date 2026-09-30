import * as agendamentoModel from '../Model/agendamentoModel.js';

export async function salvarAgendamento(req, res) {
    try {
        const dados = req.body;

        const resultado = await agendamentoModel.salvarAgendamento(dados);

        res.status(201).json({
            message: `Olá ${dados.nome}, aguardamos vocês para realizar o seu procedimento ${dados.procedimento} no dia ${dados.dia} às ${dados.hora} horas`
        });

    } catch (erro) {
        res.status(500).json({
            message: 'Erro ao salvar agendamento',
            erro: erro.message
        });
    }
}

export async function agendamento(req, res) {
    try {
        const resultado = await agendamentoModel.agendamentos();

        res.status(200).json(resultado);

    } catch (error) {
        res.status(500).json({
            message: 'Erro ao listar agendamentos',
            error: error.message
        });
    }
}
