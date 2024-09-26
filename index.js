import "./style.css"
import { pegarValorTextualDaTela, mostraValorEmElemento, adicionarEventoEmElemento, pegarValorNumericoDaTela } from "./moduloTela"
import { concatenarDoisTextos } from "./moduloTextos"
import { dividirDoisNumeros } from "./calculadora"

adicionarEventoEmElemento("botaoConcatenar", "click", iniciarProcessoConcatenacao)
adicionarEventoEmElemento("botaoDividir", "click", iniciarProcessoDivisao)

function iniciarProcessoConcatenacao() {
    const nome = pegarValorTextualDaTela("nome")
    const sobrenome = pegarValorTextualDaTela("sobrenome")

    const nomeCompleto = concatenarDoisTextos(nome, sobrenome)

    mostraValorEmElemento("resultadoConcat", nomeCompleto)
}

function iniciarProcessoDivisao() {
    const numeroUm = pegarValorNumericoDaTela("numeroUm")
    const numeroDois = pegarValorNumericoDaTela("numeroDois")
    
    const resultado = dividirDoisNumeros(numeroUm, numeroDois)

    mostraValorEmElemento("resultadoDivisao", resultado)
}

